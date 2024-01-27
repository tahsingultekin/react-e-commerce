import Banner from "../components/Banner/Banner";
import BottomMenu from "../components/BottomMenu/BottomMenu";
import CartDetail from "../components/Cart/cartItem/CartDetail";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";

const CartPage = () => {
  return (
    <div className="flex flex-col items-center min500:w-[380px] overflow-x-hidden">
      <Banner />
      <Header />
      <Navbar />
      <CartDetail />
      <BottomMenu />
      <Footer />
    </div>
  );
};

export default CartPage;
