import { createContext, useEffect, useState } from "react";

import PropTypes from "prop-types";

export const SingleContext = createContext();

const SingleProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [singleProduct, setSingleProduct] = useState(null);
  const [allProduct, setAllProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortBy, setSortBy] = useState("name-asc");
  const [perPage, setPerPage] = useState("8");
  const [productsPerPage, setProductsPerPage] = useState(8);

  const spinnerContainerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePerPageChange = (event) => {
    setPerPage(event.target.value);
  };

  const fetchAllProduct = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=100`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      setAllProduct(data.products);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  useEffect(() => {
    fetchAllProduct();
  }, []);

  useEffect(() => {
    if (!allProduct) {
      return;
    }

    let sortedItems = [...allProduct];

    if (sortBy === "price-asc") {
      sortedItems.sort((a, b) => b.price - a.price);
    } else if (sortBy === "price-desc") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortBy === "name-asc") {
      sortedItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name-desc") {
      sortedItems.sort((a, b) => b.title.localeCompare(a.title));
    }

    setSortedProducts(sortedItems);
  }, [sortBy, allProduct]);

  useEffect(() => {
    if (perPage === "12") {
      setProductsPerPage(12);
    } else if (perPage === "25") {
      setProductsPerPage(25);
    } else if (perPage === "50") {
      setProductsPerPage(50);
    } else if (perPage === "75") {
      setProductsPerPage(75);
    } else if (perPage === "8") {
      setProductsPerPage(8);
    }
  }, [perPage]);

  const fetchSingleProduct = async (id) => {
    setLoading(true); // Yükleme başladığında
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (data.images && data.images.length > 0) {
        setSelectedImage(data.images[0]);
      }

      setSingleProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setSingleProduct(null); // Hata durumunda singleProduct'ı null yap
    } finally {
      setLoading(false); // Yükleme bittiğinde
    }
  };

  return (
    <SingleContext.Provider
      value={{
        singleProduct,
        allProduct,
        selectedImage,
        setSelectedImage,
        fetchSingleProduct,
        fetchAllProduct,
        handleSortChange,
        handlePerPageChange,
        perPage,
        sortBy,
        sortedProducts,
        productsPerPage,
        setLoading,
        loading,
        spinnerContainerStyle,
      }}
    >
      {children}
    </SingleContext.Provider>
  );
};

export default SingleProductProvider;

SingleProductProvider.propTypes = {
  children: PropTypes.node,
};
