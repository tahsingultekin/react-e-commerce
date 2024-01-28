import ProductItem from "../Products/ProductItem";
import PriceRangeSlider from "./PriceRangeSlider";
import FilterMenu from "../FilterMenu/FilterMenu";
import { Drawer } from "antd";
import { useCategoriesLogic } from "./useCategoriesLogic";
import ContainerLayout from "../../layouts/ContainerLayout";

import { useState } from "react";

const Categories = () => {
  const {
    categories,
    products,
    filteredProducts,
    indexOfLastProduct,
    indexOfFirstProduct,
    handleCategoryChange,
    handleBrandFilter,
    handlePriceChange,
    drawerOpen,
    showDrawer,
    onClose,
  } = useCategoriesLogic();

  return (
    <ContainerLayout>
      <div className="product-listing-container min-w-full flex gap-5 ">
        <div className="categories-sidebar w-96 h-auto  flex flex-col md1360:hidden">
          <div className="categories">
            <h2 className="mt-5 border-b-2 pt-5 pb-3 text-xl">KATEGORİLER</h2>
            <ul className=" max-h-64 overflow-y-auto pt-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryChange(category)}
                  className="cursor-pointer mt-2 ml-3 capitalize text-sm"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="category-brand mt-3 mb-16">
            <h2 className=" border-y-2 py-5 mt-5 text-xl">MARKA</h2>
            <ul className="min-h-52 overflow-y-auto ">
              {products.map((product, index) => (
                <li
                  key={index}
                  onClick={() => handleBrandFilter(product.brand)}
                  className="cursor-pointer mt-2 ml-3 text-sm capitalize"
                >
                  {product.brand}
                </li>
              ))}
            </ul>
          </div>
          <PriceRangeSlider
            products={products}
            onPriceChange={handlePriceChange}
          />
        </div>
        <Drawer
          title="Kapat"
          placement="left"
          closable={true}
          onClose={onClose}
          open={drawerOpen}
          className="hidden md1360:block"
        >
          <div className=" flex justify-center ">
            <div className="categories-sidebar-mobil-content w-96 h-auto  flex flex-col">
              <div className="categories">
                <h2 className="mt-5 border-b-2 pt-5 pb-3 text-xl">
                  KATEGORİLER
                </h2>
                <ul className=" max-h-64 overflow-y-auto pt-2">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      onClick={() => handleCategoryChange(category)}
                      className="cursor-pointer mt-2 ml-3 capitalize text-sm"
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="category-brand mt-3 mb-16">
                <h2 className=" border-y-2 py-5 mt-5 text-xl">MARKA</h2>
                <ul className="min-h-52 overflow-y-auto ">
                  {products.map((product, index) => (
                    <li
                      key={index}
                      onClick={() => handleBrandFilter(product.brand)}
                      className="cursor-pointer mt-2 ml-3 text-sm capitalize"
                    >
                      {product.brand}
                    </li>
                  ))}
                </ul>
              </div>
              <PriceRangeSlider
                products={products}
                onPriceChange={handlePriceChange}
              />
            </div>
          </div>
        </Drawer>
        <div className="products-container w-full flex flex-col items-center">
          <div className="w-full flex justify-center items-center mt-2   md1360:w-[960px] md1000:w-[760px] min760:w-[500px] min500:w-[380px]">
            <FilterMenu />
            <div
              className="mobil-side-menu hidden pr-5 md1360:block"
              onClick={showDrawer}
            >
              <div className="h-16 border-y-2 flex items-center cursor-pointer ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                  />
                </svg>
              </div>
            </div>
          </div>
          <h2 className="text-center text-xl my-5">
            <span className="font-semibold tracking-wide">
              Kategorinin Popüler Ürünleri
            </span>
          </h2>

          <div className="products flex flex-wrap w-full min-h-[800px] justify-center  px-16 md1360:w-[960px] md1000:w-[760px] min760:w-[500px] min500:w-[480px] min500:px-0">
            {filteredProducts
              .slice(indexOfFirstProduct, indexOfLastProduct)
              .map((product) => (
                <ProductItem key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </ContainerLayout>
  );
};

export default Categories;
