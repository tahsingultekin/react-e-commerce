// useHeaderLogic.js
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import debounce from "lodash.debounce";

export const useHeaderLogic = () => {
  const navigate = useNavigate();

  const [isAutocompleteVisible, setIsAutocompleteVisible] = useState(true);

  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const wrapperRef = useRef(null); // Dışarıya tıklama için ref
  const [searchResults, setSearchResults] = useState([]);

  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const location = useLocation();

  const limitedSuggestions = suggestions.slice(0, 6);

  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [hoverActive, setHoverActive] = useState(false);

  const [categoryData, setCategoryData] = useState({}); // Store category data
  const [lastHoveredCategory, setLastHoveredCategory] = useState("");

  const [categoriesCache, setCategoriesCache] = useState({}); // Kategorilerin önbelleğe alınması için
  const [retryCount, setRetryCount] = useState(0);

  // Mobile menü için toggle
  const [isSearchActive, setIsSearchActive] = useState(false);
  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };
  // mobile menü için ekran geciktirme
  const [isLoadingResults, setIsLoadingResults] = useState(false);
  const fetchSuggestionsWithDebounce = debounce((query) => {
    if (query) {
      setIsLoadingResults(true);
      fetchSuggestions(query).then(() => {
        setIsLoadingResults(false);
      });
    }
  }, 500);

  // Mobile Menu SideBar
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  // mobile menü için input manipülasyonları
  const searchInputRef = useRef(null);
  useEffect(() => {
    if (isSearchActive && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchActive, searchInputRef]);

  const searchPanelRef = useRef(); // Beyaz ekran için ref
  useEffect(() => {
    // Dış tıklamaları kontrol eden fonksiyon
    function handleClickOutside(event) {
      if (
        searchPanelRef.current &&
        !searchPanelRef.current.contains(event.target)
      ) {
        setIsSearchActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsSearchActive]);

  // Autocomplete'i göster/gizle fonksiyonları
  const showAutocomplete = () => setIsAutocompleteVisible(true);
  const hideAutocomplete = () => setIsAutocompleteVisible(false);

  const fetchCategories = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCategories(data);
    } catch (error) {
      console.error("Kategorileri getirirken hata oluştu:", error.message);
    }
  };

  // Kategori ve ürünleri çekme (Lazy Loading)
  const fetchCategoryProducts = async (category) => {
    if (categoriesCache[category]) {
      // Önbellekte varsa, API'ye istek yapmadan önbelleği kullan
      setCategoryProducts(categoriesCache[category]);
    } else {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${category}`
        );
        if (!response.ok) {
          throw new Error("Ağ yanıtı uygun değil.");
        }
        const data = await response.json();
        setCategoriesCache((prev) => ({ ...prev, [category]: data.products }));
        setCategoryProducts(data.products);
      } catch (error) {
        console.error("Kategoriyi getirirken hata oluştu:", error);
        handleRetry(category);
      }
    }
  };

  // Debounce ile gecikmeli olarak fetchCategoryProducts çağrısı yap
  const debouncedFetchCategoryProducts = debounce(
    (category) => fetchCategoryProducts(category),
    500 // 500 milisaniyelik bir gecikme
  );

  const handleCategoryHover = (category) => {
    setHoverActive(true);
    debouncedFetchCategoryProducts(category);
  };

  const handleCategoryLeave = () => {
    setHoverActive(false);
  };

  const clearSuggestionsAndHoverState = () => {
    setSuggestions([]);
    setHoverActive(false);
    setLastHoveredCategory("");
  };

  // Arama sorgusunu ve kategori eşleştirmesini düzenleme
  const handleSearchInputChange = (e) => {
    const query = e.target.value.trim();
    setSearchInput(query);

    if (e.target.value.length > 0) {
      showAutocomplete();
    } else {
      hideAutocomplete();
    }

    if (query.length === 0) {
      setIsSearchActive(false);
    }

    fetchSuggestionsWithDebounce(query);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        hideAutocomplete();
        setSuggestions([]); // Önerileri dış tıklamada temizle
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const fetchSuggestions = async (query) => {
    if (!query) return;

    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );
      const data = await response.json();

      setSearchResults(data.products); // Arama sonuçlarını sakla
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const debouncedFetch = debounce(fetchSuggestions, 500);

  useEffect(() => {
    if (searchInput.length === 0) {
      setSuggestions([]);
    } else {
      debouncedFetch(searchInput);
    }
    return () => {
      debouncedFetch.cancel();
    };
  }, [searchInput]);

  const handleSearchSubmit = () => {
    // Eğer arama sorgusu varsa onu, yoksa son hover edilen kategoriyi kullan
    const query = searchInput || lastHoveredCategory;

    navigate("/search-results", {
      state: { searchQuery: query },
    });

    setSearchInput("");
    setSuggestions([]);
  };

  const handleCategoryClick = (category) => {
    // Kategoriye tıklama işlemleri
    navigate(`/categories/${category}`);
    hideAutocomplete();
    setIsAutocompleteVisible(false); // Autocomplete'yi kapat
  };

  // Retry Mantığı
  const handleRetry = async (category) => {
    if (retryCount < 3) {
      // Örneğin 3 kez deneme limiti
      setTimeout(() => {
        fetchCategoryProducts(category);
        setRetryCount(retryCount + 1);
      }, 2000); // 2 saniye bekleyip yeniden dene
    } else {
      console.error("Maksimum yeniden deneme sayısına ulaşıldı.");
    }
  };

  useEffect(() => {
    setRetryCount(0);
  }, [location.pathname]);

  const handleHoverCategory = async (category) => {
    // Eğer bu kategori için ürünler zaten yüklenmişse, tekrar yükleme
    if (categoryProducts[category]) {
      return;
    }

    try {
      const response = await fetch(
        `https://dummyjson.com/products/category/${category}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setCategoryProducts((prevState) => ({
        ...prevState,
        [category]: data.products,
      }));
    } catch (error) {
      console.error("Ürünleri getirirken hata oluştu:", error);
    }
  };

  useEffect(() => {
    // URL değiştiğinde autocomplete penceresini kapat
    setIsAutocompleteVisible(false);
  }, [location]);

  return {
    navigate,
    categories,
    setCategories,
    categoryProducts,
    setCategoryProducts,
    hoverActive,
    setHoverActive,
    searchInput,
    setSearchInput,
    handleCategoryHover,
    limitedSuggestions,
    suggestions,
    setSuggestions,

    wrapperRef,
    selectedSuggestionIndex,
    setSelectedSuggestionIndex,
    location,
    categoryData,
    setCategoryData,
    lastHoveredCategory,
    setLastHoveredCategory,

    handleCategoryLeave,
    clearSuggestionsAndHoverState,
    handleSearchInputChange,
    fetchSuggestions,
    debouncedFetch,

    handleSearchSubmit,
    handleCategoryClick,
    searchResults,
    fetchCategories,
    handleHoverCategory,
    isAutocompleteVisible,
    showAutocomplete,
    hideAutocomplete,
    isSearchActive,
    setIsSearchActive,
    toggleSearch,
    isLoadingResults,
    searchInputRef,
    searchPanelRef,
    open,
    drawerOpen,
    showDrawer,
    onClose,
  };
};
