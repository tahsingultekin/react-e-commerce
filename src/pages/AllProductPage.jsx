import Banner from "../components/Banner/Banner";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Products from "../components/Products/Products";

const AllProductPage = () => {
  return (
    <div className="flex flex-col items-center overflow-x-hidden">
      <Banner />
      <Header />
      <Navbar />
      <FilterMenu />
      <Products />
      <Footer />
    </div>
  );
};

export default AllProductPage;
