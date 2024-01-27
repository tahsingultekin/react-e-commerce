import { useContext } from "react";

import ProductItem from "../Products/ProductItem";
import Slider from "react-slick";
import Line from "../../utils/Line";
import { SingleContext } from "../../context/SingleProductProvider";
import ContainerLayout from "../../layouts/ContainerLayout";

const BottomMenu = () => {
  const { allProduct } = useContext(SingleContext);

  const selectedItems =
    allProduct && allProduct.length > 0
      ? allProduct.filter((item) => item.category === "skincare")
      : [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
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
    ],
  };

  return (
    <div className="wrapper flex justify-center min760:ml-10 min760:text-sm">
      <ContainerLayout>
        <div className="bottom-container flex flex-col justify-start my-10  md1360:w-[960px] md1000:w-[720px] min760:w-[500px] min500:w-[380px]">
          <div className="my-5 relative min500:text-xs">
            <h3>SİZİN İÇİN SEÇTİKLERİMİZ</h3>
            <Line />
          </div>

          <Slider
            {...settings}
            className="md1360:w-[960px] md1000:w-[720px] min760:w-[500px]"
          >
            {selectedItems?.map((product) => {
              return <ProductItem product={product} key={product.id} />;
            })}
          </Slider>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default BottomMenu;
