import { useContext } from "react";
import { CartContext } from "../../../context/CartProvider";

const CartTitle = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-detail-title flex flex-col ">
      <div className="flex items-center gap-3  mb-2 mt-12 min760:flex-col ">
        <span className="block text-2xl font-semibold min500:text-md">
          Alışveriş Sepetim
        </span>
        <span className="block text-lg min500:text-sm">
          Sepette <b className="text-orange-500">{cartItems.length}</b> tane
          ürün var
        </span>
      </div>

      <span className="block w-11/12 h-2 border-b "></span>
    </div>
  );
};

export default CartTitle;
