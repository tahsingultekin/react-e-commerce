import { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { SingleContext } from "../../context/SingleProductProvider";
import { Pagination, Spin } from "antd";
import ContainerLayout from "../../layouts/ContainerLayout";

const Products = () => {
  const {
    fetchAllProduct,
    sortedProducts,
    productsPerPage,
    setLoading,
    loading,
    spinnerContainerStyle,
  } = useContext(SingleContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      await fetchAllProduct();
      setLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    // Mevcut sayfada gösterilecek ürünleri hesapla
    const start = (currentPage - 1) * productsPerPage;
    const end = start + productsPerPage;
    setCurrentProducts(sortedProducts.slice(start, end));
  }, [currentPage, sortedProducts, productsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-[82.5rem] flex flex-col items-center md1360:w-[1000px] md1000:w-[760] min760:w-[500px] min500:w-[380px]">
      {loading && (
        <div style={spinnerContainerStyle}>
          <Spin size="large" />
        </div>
      )}

      <div className="flex  flex-wrap justify-center min500:w-[400px]">
        {currentProducts.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
      <div className="mt-3 mb-5 flex justify-center items-center">
        <Pagination
          current={currentPage}
          onChange={handlePageChange}
          total={sortedProducts.length}
          pageSize={productsPerPage}
        />
      </div>
    </div>
  );
};

export default Products;
