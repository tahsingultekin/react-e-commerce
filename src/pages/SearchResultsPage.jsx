import { Pagination } from "antd";
import { useLocation } from "react-router-dom";
import ProductItem from "../components/Products/ProductItem";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import BottomMenu from "../components/BottomMenu/BottomMenu";
import Footer from "../components/Footer/Footer";
import { useState, useEffect } from "react";

const SearchResultsPage = () => {
  const location = useLocation();
  const searchQuery = location.state?.searchQuery;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = 2;

  useEffect(() => {
    // Yeni arama sorgusu için currentPage'i sıfırla
    setCurrentPage(1);
  }, [searchQuery]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/search?q=${searchQuery}&limit=${productsPerPage}&skip=${
            (currentPage - 1) * productsPerPage
          }`
        );
        const data = await response.json();
        setSearchResults(data.products);
        setTotalProducts(data.total);
        console.log(totalProducts, searchResults);
      } catch (error) {
        console.error("Ürünler yüklenirken bir hata oluştu", error);
      }
    };

    fetchProducts();
  }, [currentPage, searchQuery]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col items-center ">
      <Banner />
      <Header />
      <Navbar />
      <div className="mb-5 h-20 flex justify-center items-center border-b tracking-wide ">
        <h1 className="text-xl">Arama Sonuçları Aşağıdaki Gibidir</h1>
      </div>
      <div className="flex flex-wrap justify-center mb-5 ">
        {searchResults.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
      <Pagination
        current={currentPage}
        onChange={handlePageChange}
        total={totalProducts}
        pageSize={productsPerPage}
      />
      <BottomMenu />
      <Footer />
    </div>
  );
};

export default SearchResultsPage;
