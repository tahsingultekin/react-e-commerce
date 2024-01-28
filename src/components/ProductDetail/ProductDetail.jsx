import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import ProductInfo from "./ProductInfo";
import ProductGallery from "./ProductGallery";
import ContainerLayout from "../../layouts/ContainerLayout";

const ProductDetail = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Banner />
      <Header />
      <Navbar />
      <div className="overflow-x-hidden w-[82.5rem] flex items-center min500:w-[370px]">
        <div className="flex gap-8 my-12 px-12 md1000:flex-col  md1000:w-[760px] min760:w-[500px] min500:items-center min500:[w-max-370px] min500:overflow-x-hidden">
          <ProductGallery />
          <ProductInfo />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
