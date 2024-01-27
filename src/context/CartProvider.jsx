import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );
  const [sortBy, setSortBy] = useState("name-asc");
  const [perPage, setPerPage] = useState("12");

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePerPageChange = (event) => {
    setPerPage(event.target.value);
  };

  useEffect(() => {
    let sortedItems = [...cartItems];

    if (sortBy === "price-asc") {
      sortedItems.sort((a, b) => b.price - a.price);
    } else if (sortBy === "price-desc") {
      sortedItems.sort((a, b) => a.price - b.price);
    } else if (sortBy === "name-asc") {
      sortedItems.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === "name-desc") {
      sortedItems.sort((a, b) => b.title.localeCompare(a.title));
    }

    setCartItems(sortedItems);
  }, [sortBy]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((currentItems) => {
      const existingProductIndex = currentItems.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex >= 0) {
        const updatedItems = [...currentItems];

        updatedItems[existingProductIndex] = {
          ...updatedItems[existingProductIndex],
          quantity:
            updatedItems[existingProductIndex].quantity + product.quantity,
        };

        return updatedItems;
      } else {
        return [...currentItems, product];
      }
    });
  };

  const updateProductQuantity = (productId, quantity) => {
    setCartItems((currentItems) => {
      return currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: quantity } : item
      );
    });
  };

  const removeProductFromCart = (productId) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id !== productId);
    });
  };

  const calculateTotalPrice = () => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }

    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        setCartItems,
        sortBy,
        perPage,
        handleSortChange,
        handlePerPageChange,
        updateProductQuantity,
        removeProductFromCart,
        calculateTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node,
};
