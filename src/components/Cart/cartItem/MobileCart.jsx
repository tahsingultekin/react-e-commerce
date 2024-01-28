import { useContext } from "react";
import { CartContext } from "../../../context/CartProvider";
import { CurrencyFormat } from "../../../utils/CurrencyFormat";

const MobileCart = ({
  handleUpdateQuantity,
  handleRemoveClick,
  decrement,
  increment,
  handleQuantityChange,
  tempQuantities,
  itemTotalPrice,
  navigate,
}) => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="wrapper hidden md1000:block min760:w-[500px] min500:w-[370px] ">
      <div className="bg-zinc-50 flex flex-col  w-[600px] max-h-[350px]  rounded py-5 px-3 mt-7 min760:w-full overflow-y-auto">
        {cartItems.map((item) => {
          return (
            <div
              key={item.id}
              className="mobile-cart-frame w-full flex justify-center items-center h-48 px-1 py-3 border rounded bg-white mb-5"
            >
              <div className="mobile-cart-items w-full flex justify-around min500:justify-between min500:px-1  p-2 h-36">
                <div className="w-16 h-16 mt-6">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    onClick={() => navigate(`/product/${item.id}`)}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
                <div className="w-64 ml-7 flex flex-col justify-between items-start">
                  <span className="text-xs text-slate-500">
                    {item.title.substring(0, 26)}..
                  </span>
                  <div className="flex justify-start w-28">
                    <button
                      className="text-white bg-zinc-400 text-center w-7 h-7 outline-none"
                      onClick={() => decrement(item, item.id)}
                    >
                      -
                    </button>
                    <input
                      value={
                        tempQuantities[item.id] !== undefined
                          ? tempQuantities[item.id]
                          : item.quantity
                      }
                      onChange={(e) =>
                        handleQuantityChange(
                          item.id,
                          parseInt(e.target.value) || 0
                        )
                      }
                      className="w-9 h-7 text-black text-center bg-white border-y border-slate-500 outline-none text-xs"
                    />
                    <button
                      className="text-white bg-zinc-400 text-center w-7 h-7 outline-none"
                      onClick={() => increment(item, item.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex gap-5">
                    <button
                      onClick={() => handleUpdateQuantity(item.id)}
                      className="bg-blue-600 hover:bg-emerald-500 w-7 h-7 text-white rounded-md tooltip"
                    >
                      <span className="tooltiptext">Güncelle</span>
                      <i className="fa-solid fa-arrows-rotate"></i>
                    </button>
                    <button
                      onClick={() => handleRemoveClick(item?.id)}
                      className="bg-red-500 hover:bg-orange-500 w-7 h-7 text-white rounded-md tooltip"
                    >
                      <span className="tooltiptext">Kaldır</span>
                      <i className="fa-solid fa-circle-xmark"></i>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <span
                    className="cursor-pointer"
                    onClick={() => handleRemoveClick(item?.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                  <div className="flex flex-col gap-3 text-xs">
                    <span>{CurrencyFormat(item?.price)}</span>
                    <span>
                      {CurrencyFormat(
                        itemTotalPrice(item.price, item.quantity)
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileCart;
