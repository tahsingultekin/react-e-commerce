import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { SingleContext } from "./SingleProductProvider";

export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState("smartphones");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const { sortBy } = useContext(SingleContext);

  useEffect(() => {
    if (!products) return;

    const filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    let sortedItems = [...filtered];
    if (sortBy === "price-asc") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sortedItems.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sortedItems);
  }, [products, priceRange, sortBy]);

  return (
    <CategoryContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
        priceRange,
        setPriceRange,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryProvider;

CategoryProvider.propTypes = {
  children: PropTypes.node,
};
