// useHeaderLogic.js
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SingleContext } from "../../context/SingleProductProvider";

export const useCategoriesLogic = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // localStorage'dan alınan değerler veya varsayılan değerlerle başlat
  const initialCategory =
    location.state?.selectedCategory ||
    localStorage.getItem("selectedCategory") ||
    "varsayılan-kategori";

  const initialBrand = localStorage.getItem("selectedBrand") || null;
  const initialPriceRange = JSON.parse(localStorage.getItem("priceRange")) || [
    0, 1000,
  ];

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState(initialPriceRange);

  const { sortBy, perPage } = useContext(SingleContext);

  const [currentPage] = useState(1);
  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;

  // Mobil category side bar
  const [drawerOpen, setDrawerOpen] = useState(false);

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onClose = () => {
    setDrawerOpen(false);
  };

  useEffect(() => {
    if (!products) return;

    let sortedItems = [...products];
    if (sortBy === "price-asc") {
      sortedItems.sort((a, b) => b.price - a.price);
    } else if (sortBy === "price-desc") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortBy === "name-asc") {
      sortedItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name-desc") {
      sortedItems.sort((a, b) => b.title.localeCompare(a.title));
    }

    setFilteredProducts(sortedItems);
  }, [sortBy, products]);

  // Marka filtresine göre ürünleri filtreleme
  useEffect(() => {
    if (!products) return;

    let filteredByBrand = products.filter((product) => {
      return selectedBrand ? product.brand === selectedBrand : true;
    });

    setFilteredProducts(filteredByBrand);
  }, [selectedBrand, products]);

  // Fiyat aralığına göre ürünleri filtreleme
  const filterProductsByPrice = (products, range) => {
    const [min, max] = range;
    const filtered = products.filter(
      (product) => product.price >= min && product.price <= max
    );
    setFilteredProducts(filtered);
  };

  // Kategori değiştiğinde fiyat aralığını ve filtreyi güncelle
  useEffect(() => {
    filterProductsByPrice(products, priceRange);
  }, [priceRange, products]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // URL'den gelen kategori bilgisini kullanarak ilgili ürünleri getir
  useEffect(() => {
    const fetchCategoryProducts = async () => {
      try {
        const categoryFromURL = location.pathname.split("/")[2]; // URL'den kategori adını al
        const response = await fetch(
          `https://dummyjson.com/products/category/${categoryFromURL}`
        );
        const data = await response.json();

        setProducts(data.products);
        setSelectedCategory(categoryFromURL);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategoryProducts();
  }, [location.pathname]);

  useEffect(() => {
    // `products` state'i güncellendiğinde `filteredProducts`'ı güncelle
    setFilteredProducts(products);
  }, [products]); // `products`'ı bağımlılık dizisine ekle

  // Uygulama başladığında localStorage'dan veri yüklemek için useEffect
  useEffect(() => {
    const savedCategory = localStorage.getItem("selectedCategory");
    const savedBrand = localStorage.getItem("selectedBrand");
    const savedPriceRange = localStorage.getItem("priceRange");

    if (savedCategory) setSelectedCategory(savedCategory);
    if (savedBrand) setSelectedBrand(savedBrand);
    if (savedPriceRange) setPriceRange(JSON.parse(savedPriceRange));
  }, []);

  // Kategori seçimini yönet
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    navigate(`/categories/${category}`);
    localStorage.setItem("selectedCategory", category);
    onClose();
  };

  const handleBrandFilter = (brand) => {
    setSelectedBrand(brand);
    localStorage.setItem("selectedBrand", brand);
    onClose();
  };

  // Fiyat aralığı değiştiğinde çalışacak fonksiyon
  const handlePriceChange = (newRange) => {
    setPriceRange(newRange);
    localStorage.setItem("priceRange", JSON.stringify(newRange));

    filterProductsByPrice(products, newRange);
  };

  useEffect(() => {
    if (location.state?.selectedCategory) {
      setSelectedCategory(location.state.selectedCategory);
    }
  }, [location]);

  return {
    location,
    initialCategory,
    initialBrand,
    initialPriceRange,
    categories,
    setCategories,
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    setSelectedBrand,
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    priceRange,
    setPriceRange,
    sortBy,
    perPage,
    currentPage,
    indexOfLastProduct,
    indexOfFirstProduct,
    filterProductsByPrice,
    handleCategoryChange,
    handleBrandFilter,
    handlePriceChange,
    drawerOpen,
    showDrawer,
    onClose,
  };
};
