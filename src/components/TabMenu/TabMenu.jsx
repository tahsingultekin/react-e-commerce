import { useContext, useState } from "react";

import "react-tabs/style/react-tabs.css";
import ProductItem from "../Products/ProductItem";

import Slider from "react-slick";
import "./sliderSwiper.css";
import { SingleContext } from "../../context/SingleProductProvider";
import ContainerLayout from "../../layouts/ContainerLayout";

const TabMenu = () => {
  const [isActive, setIsActive] = useState("showcase");

  const { allProduct } = useContext(SingleContext);

  const showcaseProducts =
    allProduct && allProduct.length > 0
      ? allProduct.filter((product) => product?.category === "smartphones")
      : [];

  const bestsellerProducts =
    allProduct && allProduct.length > 0
      ? allProduct.filter((product) => product.category === "laptops")
      : [];

  const newOnesProducts =
    allProduct && allProduct.length > 0
      ? allProduct.filter((product) => product?.category === "groceries")
      : [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 3440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          speed: 500,
          dots: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
          speed: 500,
          dots: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  const showcaseKey = `showcase-${isActive === "showcase"}`;
  const bestsellerKey = `bestseller-${isActive === "bestseller"}`;
  const newOnesKey = `newOnes-${isActive === "newOnes"}`;

  return (
    <div className="w-full flex justify-center mt-5 py-5 ">
      <ContainerLayout>
        <ul className="w-full flex justify-start items-center gap-10 mb-4 px-8 md1360:w-[960px] md1000:w-[720px] min760:w-[500px] min760:text-sm min500:w-[380px] min500:text-xs">
          <li
            onClick={() => setIsActive("showcase")}
            className={`w-32 h-8 flex justify-center items-center cursor-pointer min500:w-32 ${
              isActive === "showcase" ? "li" : ""
            }`}
          >
            Vitrindekiler
          </li>
          <li
            onClick={() => setIsActive("bestseller")}
            className={`w-32 h-8 flex justify-center items-center cursor-pointer min500:w-96 ${
              isActive === "bestseller" ? "li" : ""
            }`}
          >
            Çok Satanlar
          </li>
          <li
            onClick={() => setIsActive("newOnes")}
            className={`w-32 h-8 flex justify-center items-center cursor-pointer min500:w-96 ${
              isActive === "newOnes" ? "li" : ""
            }`}
          >
            Yeni Gelenler
          </li>
        </ul>

        <div className="tab-slider flex justify-center px-8 min500:w-[380px] min500:px-0">
          <div className={` ${isActive === "showcase" ? "block" : "hidden"}`}>
            <Slider
              {...settings}
              key={showcaseKey}
              className="lg3440:w-[1360px] md1360:w-[960px] md1000:w-[720px] min760:w-[500px] min500:w-[420px] min500:px-0"
            >
              {showcaseProducts.map((product) => {
                return <ProductItem product={product} key={product.id} />;
              })}
            </Slider>
          </div>

          <div className={`${isActive === "bestseller" ? "block" : "hidden"}`}>
            <Slider
              {...settings}
              key={bestsellerKey}
              className="lg3440:w-[1360px] md1360:w-[960px] md1000:w-[720px] min760:w-[500px]   min500:w-[420px] min500:px-0 "
            >
              {bestsellerProducts.map((product) => {
                return <ProductItem product={product} key={product.id} />;
              })}
            </Slider>
          </div>

          <div className={` ${isActive === "newOnes" ? "block" : "hidden"}`}>
            <Slider
              {...settings}
              key={newOnesKey}
              className="lg3440:w-[1360px] md1360:w-[960px] md1000:w-[720px] min760:w-[500px] min500:w-[420px] min500:px-0"
            >
              {newOnesProducts.map((product) => {
                return <ProductItem product={product} key={product.id} />;
              })}
            </Slider>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default TabMenu;
