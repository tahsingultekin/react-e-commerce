import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { CurrencyFormat } from "../../utils/CurrencyFormat";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { motion } from "framer-motion";
import ConfirmModal from "../ConfirmModel/ConfirmModal";
import PropTypes from "prop-types";

const CartHover = ({ showCartHover }) => {
  const navigate = useNavigate();
  const { cartItems, removeProductFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);

  useEffect(() => {
    // Sepet boşsa, mesajı göster
    if (cartItems.length === 0) {
      setShowEmptyCartMessage(true);
      // 1.5 saniye sonra mesajı gizle
      const timer = setTimeout(() => {
        setShowEmptyCartMessage(false);
      }, 1500);
      // Cleanup function
      return () => clearTimeout(timer);
    }
  }, [cartItems]);
  const handleProductClick = (e, productId) => {
    e.stopPropagation();
    navigate(`/product/${productId}`);
  };

  // confirm modal için gerekli state ve fonksiyonlar
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleRemoveClick = (productId) => {
    setIsModalOpen(true);
    setSelectedProductId(productId);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
  };

  const confirmRemoveProduct = () => {
    removeProductFromCart(selectedProductId);
    closeModal();
    message.success("Ürün sepetten başarıyla kaldırıldı!");
    navigate("/");
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={showCartHover ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="absolute top-full right-0 bg-white"
      >
        {cartItems.length > 0 ? (
          <>
            <div className="wrapper absolute top-full right-0  w-[30rem]  h-auto flex flex-col justify-between py-3 px-5 shadow-2xl tracking-wide bg-white min500:w-[25rem]">
              <div className="top-items max-h-96 overflow-y-auto pr-3">
                {cartItems.map((item, index) => (
                  <div
                    key={item.id}
                    className={` p-3 ${
                      index !== cartItems.length - 1 ? "border-b" : ""
                    }`}
                  >
                    <div className="flex justify-between items-center h-24  ">
                      <div
                        className=" w-16 h-20 cursor-pointer"
                        onClick={(e) => handleProductClick(e, item.id)}
                      >
                        <img
                          className="w-full h-full object-cover object-center rounded"
                          src={item?.thumbnail}
                          alt={item?.title}
                        />
                      </div>
                      <div
                        className="flex flex-col items-start space-y-1 min-w-44 cursor-pointer"
                        onClick={(e) => handleProductClick(e, item.id)}
                      >
                        <span className="font-semibold text-sm">
                          {item?.title.substring(0, 25)}..
                        </span>
                        <div className="text-sm font-thin flex items-center gap-1">
                          <span className="">Adet x</span>
                          <span className="">{item?.quantity}</span>
                        </div>
                        <span className="font-semibold">
                          {CurrencyFormat(item?.quantity * item.price)}
                        </span>
                      </div>
                      <div
                        className="cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveClick(item.id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="middle-items flex justify-between my-2">
                <span className="font-semibold">GENEL TOPLAM</span>
                <span className=" font-extrabold">
                  {CurrencyFormat(totalPrice)}
                </span>
              </div>
              <div className="bottom-items w-full justify-evenly flex gap-3 my-3 text-sm">
                <button className="border border-slate-400 w-1/2 h-12  transition-all duration-300 hover:text-white hover:bg-black ">
                  SEPETİM
                </button>
                <button className="border w-1/2 h-12 bg-black text-white">
                  SİPARİŞ TAMAMLA
                </button>
              </div>
            </div>
          </>
        ) : showEmptyCartMessage ? (
          <div className="text-center text-sm py-2 px-5 mt-2 tracking-wider text-slate-600 w-max shadow-md md1360:text-xs">
            Sepetinizde ürün bulunmamaktadır.
          </div>
        ) : null}
      </motion.div>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmRemoveProduct}
      />
    </>
  );
};

export default CartHover;

CartHover.propTypes = {
  showCartHover: PropTypes.bool,
};
