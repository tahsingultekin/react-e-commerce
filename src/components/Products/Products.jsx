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
    <ContainerLayout>
      {loading && (
        <div style={spinnerContainerStyle}>
          <Spin size="large" />
        </div>
      )}

      <div className="flex flex-wrap justify-center">
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
    </ContainerLayout>
  );
};

export default Products;
