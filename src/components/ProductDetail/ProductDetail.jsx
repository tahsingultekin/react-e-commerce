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
      <ContainerLayout>
        <div className="flex gap-8 my-12 px-12 md1000:flex-col  md1000:w-[760px] min760:w-[500px] min500:items-center">
          <ProductGallery />
          <ProductInfo />
        </div>
      </ContainerLayout>

      <Footer />
    </div>
  );
};

export default ProductDetail;
