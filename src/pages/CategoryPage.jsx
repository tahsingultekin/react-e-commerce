import Banner from "../components/Banner/Banner";
import Categories from "../components/Categories/Categories";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const CategoryPage = () => {
  return (
    <div className="flex flex-col items-center">
      <Banner />
      <Header />
      <Navbar />
      <Categories />
      <Footer />
    </div>
  );
};

export default CategoryPage;
