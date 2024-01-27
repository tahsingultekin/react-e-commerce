import AllProductButton from "../components/AllProductButton/AllProductButton";
import Banner from "../components/Banner/Banner";
import BottomMenu from "../components/BottomMenu/BottomMenu";
import Circles from "../components/Circles/Circles";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MiddleMenu from "../components/MiddleMenu/MiddleMenu";
import Navbar from "../components/Navbar/Navbar";
import Slide from "../components/Slider/Slide";
import TabMenu from "../components/TabMenu/TabMenu";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-hidden">
      <Banner />
      <Header />
      <Navbar />
      <Slide />
      <Circles />
      <TabMenu />
      <AllProductButton />
      <MiddleMenu />
      <BottomMenu />
      <Footer />
    </div>
  );
};

export default HomePage;
