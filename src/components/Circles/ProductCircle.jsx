import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./circleSlider.css";
import { useRef } from "react";
import { useHeaderLogic } from "../Header/useHeaderLogic";

const ProductCircle = () => {
  const { handleCategoryClick } = useHeaderLogic();

  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1360,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 760,
        settings: {
          infinite: true,
          speed: 500,
          autoplay: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          infinite: true,
          speed: 500,
          autoplay: true,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const previous = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="circle-slider w-[82.5rem] px-10 pb-5 flex flex-col bg-[#FAF3EC] md1360:w-[960px] md1000:w-[720px] min760:w-[500px] min500:w-[380px]">
      <Slider
        ref={sliderRef}
        {...settings}
        className="my-10 capitalize text-xs tracking-wider font-semibold"
      >
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Skincare")}
        >
          <img
            src="/circle-slider/cream.webp"
            alt=""
            className="w-full h-full  rounded-full object-center object-cover border-4 border-orange-100"
          />
          <span className="cursor-pointer">Skincare</span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Fragrances")}
        >
          <img
            src="/circle-slider/fragrances.webp"
            alt=""
            className="w-full h-full object-center object-cover rounded-full border-4 border-orange-100"
          />
          <span>fragrances</span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Furniture")}
        >
          <img
            src="/circle-slider/furniture.jpeg"
            alt=""
            className="w-full h-full object-center object-cover rounded-full border-4 border-orange-100"
          />
          <span>furniture</span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Groceries")}
        >
          <img
            src="/circle-slider/grocery.jpeg"
            alt=""
            className="w-full h-full object-center object-cover rounded-full border-4 border-orange-100"
          />
          <span>groceries</span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Home-Decoration")}
        >
          <img
            src="/circle-slider/home-decoration.webp"
            alt=""
            className="w-full h-full object-center object-cover rounded-full border-4 border-orange-100"
          />
          <span>decoration</span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Laptops")}
        >
          <img
            src="/circle-slider/laptop.webp"
            alt=""
            className="w-full h-full object-center object-cover rounded-full border-4 border-orange-100"
          />
          <span>laptops</span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Lighting")}
        >
          <img
            src="/circle-slider/lighting.webp"
            alt=""
            className="w-full h-full object-center object-cover rounded-full border-4 border-orange-100"
          />
          <span>lighting</span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Womens-Bags")}
        >
          <img
            src="/circle-slider/purse.webp"
            alt=""
            className="w-full h-full object-center object-cover rounded-full border-4 border-orange-100"
          />
          <span>womens bag</span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Mens-Shoes")}
        >
          <img
            src="/circle-slider/shoes.webp"
            alt=""
            className="w-full h-full object-center object-cover rounded-full border-4 border-orange-100"
          />
          <span>shoes</span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Smartphones")}
        >
          <img
            src="/circle-slider/smartphones.webp"
            alt=""
            className="w-full h-full object-center object-cover rounded-full border-4 border-orange-100"
          />
          <span>smartphones</span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Sunglasses")}
        >
          <img
            src="/circle-slider/sunglasses.webp"
            alt=""
            className="w-full h-full object-center object-cover rounded-full border-4 border-orange-100"
          />
          <span>sunglasses</span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => handleCategoryClick("Mens-Watches")}
        >
          <img
            src="/circle-slider/watch.jpeg"
            alt=""
            className="w-full h-full object-center object-cover rounded-full border-4 border-orange-100"
          />
          <span>Mens Watch</span>
        </div>
      </Slider>
      <div className="slider-buttons flex justify-center gap-7">
        <button onClick={previous}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
        <button onClick={next}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCircle;
