import { useContext } from "react";
import { CurrencyFormat } from "../../../utils/CurrencyFormat";
import { CartContext } from "../../../context/CartProvider";
import { Link } from "react-router-dom";

const CartBottom = () => {
  const { calculateTotalPrice } = useContext(CartContext);
  return (
    <div className=" max-w-[400px] flex justify-end md1360:justify-start min500:text-sm">
      <div className="cart-bottom bg-zinc-50 max-w-[400px] border border-slate-300 p-4 mt-7 tracking-wide">
        <div className="panel-total">
          <div className="cart-panel ">
            <p className="text-sm tracking-wide text-gray-800 ">
              Bir sonraki adımda ne yapmak istersiniz?
            </p>
          </div>
          <div className="cart-total flex justify-end h-auto py-1 my-8 pr-3 bg-white border border-slate-300">
            <table className=" border-separate border-spacing-y-5">
              <tbody>
                <tr>
                  <td className="min-w-[100px] ">
                    <strong className="flex justify-end mr-5 opacity-60">
                      Ara Toplam:
                    </strong>
                  </td>
                  <td className="font-light">
                    {CurrencyFormat(calculateTotalPrice())}
                  </td>
                </tr>

                <tr>
                  <td className="min-w-[100px]">
                    <strong className="flex justify-end mr-5 opacity-60">
                      Toplam:
                    </strong>
                  </td>
                  <td className="font-light">
                    {CurrencyFormat(calculateTotalPrice())}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="buttons flex justify-between  gap-2 text-xs md1360:flex-col md1360:text-center">
          <div className="home-btn  p-3 cursor-pointer  transition-all border border-slate-500 hover:bg-black hover:text-white">
            <Link to="/">ALIŞVERİŞE DEVAM ET</Link>
          </div>
          <div className="checkOut-btn bg-black text-white p-3 cursor-pointer ">
            <a href="#">ALIŞVERİŞİ TAMAMLA</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartBottom;
