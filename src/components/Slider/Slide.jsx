import Slider from "react-slick";
import ContainerLayout from "../../layouts/ContainerLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Slide = (props) => {
  let sliderRef = useRef(null);
  const [sliderKey, setSliderKey] = useState("initial-key");
  const location = useLocation();

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

  useEffect(() => {
    setSliderKey(Date.now());
  }, [location]);

  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "ease-in-out",
    ...props,
  };
  return (
    <div className="relative w-full flex justify-center items-center ">
      <ContainerLayout>
        <Slider
          key={sliderKey}
          ref={sliderRef}
          className="relative max-w-6xl md1360:w-[960px] md1000:w-[720px] min760:w-[500px] min500:w-[380px] "
          {...settings}
        >
          <img
            src="../../../public/home-slider/img-1.png"
            alt=""
            className="h-[25rem] object-cover object-center"
          />

          <img
            src="../../../public/home-slider/img-2.png"
            alt=""
            className="h-[25rem] object-cover object-center"
          />

          <img
            src="../../../public/home-slider/img-3.png"
            alt=""
            className="h-[25rem] object-cover object-center"
          />

          <img
            src="../../../public/home-slider/img-4.png"
            alt=""
            className="h-[25rem] object-cover object-center"
          />

          <img
            src="../../../public/home-slider/img-5.png"
            alt=""
            className="h-[25rem] object-cover object-center"
          />
          <img
            src="../../../public/home-slider/img-6.png"
            alt=""
            className="h-[25rem] object-cover object-right-top"
          />
          <img
            src="../../../public/home-slider/img-7.png"
            alt=""
            className="h-[25rem] object-cover object-right-top"
          />
        </Slider>
      </ContainerLayout>

      <ContainerLayout>
        <div className=" w-full flex justify-center bg-transparent absolute  top-36 left-0">
          <div className="relative w-[82.5rem] h-20">
            <button
              className="button absolute top-0 left-0 w-20 h-20 md1360:left-3  md1000:left-3 min760:left-12 min500:left-20"
              onClick={previous}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.6}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5 8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              className="button absolute top-0 right-0 w-20 h-20 md1360:right-3 md1000:right-3 min760:right-12 min500:right-20"
              onClick={next}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.6}
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Slide;
