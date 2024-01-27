import { useContext } from "react";
import CartBottom from "./CartBottom";
import CartTable from "./CartTable";
import CartTitle from "./CartTitle";
import { CartContext } from "../../../context/CartProvider";
CartBottom;
import { Empty } from "antd";
import { useNavigate } from "react-router-dom";

const CartDetail = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div className="w-[82.5rem] md1360:w-[1000px] md1360:ml-10 md1000:w-[760px] min760:w-[500px] min500:w-[370px] min500:ml-0">
      <div className="cart-detail w-full flex flex-col py-12 ">
        {cartItems.length > 0 ? (
          <div className="md1360:w-[1000px] md1360:ml-10 md1000:w-[760px] min760:w-[500px] min500:w-[370px] min500:ml-0">
            <CartTitle />
            <div className="w-full flex justify-between gap-5 md1360:flex-col  md1360:gap-5 min760:items-start min500:items-center">
              <div className="md1000:max-w-[750px] md1000:overflow-x-auto min760:max-w-[350px] ">
                <CartTable />
              </div>
              <div>
                <CartBottom />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#F2F2F2] pb-12 w-full flex flex-col items-center">
            <Empty
              className="mt-10 mb-5"
              description={
                <span className="text-xl tracking-wide">
                  Alışveriş Sepetiniz Boş!
                </span>
              }
            />
            <button
              onClick={() => navigate("/")}
              className=" w-64 h-10 border border-slate-400 text-black hover:bg-black hover:text-white tracking-wide rounded-md mx-auto mt-7 transition-all"
            >
              Alışverişe devam et
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDetail;
