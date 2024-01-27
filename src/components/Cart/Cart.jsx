import { useContext, useState } from "react";
import { CartContext } from "../../context/CartProvider";
import { useNavigate } from "react-router-dom";
import CartHover from "./CartHover";
import { AuthContext } from "../../context/AuthProvider";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const { logout, isSuccess, isLoggingOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showCartHover, setShowCartHover] = useState(false);

  const handleCartHoverEnter = () => {
    setShowCartHover(true);
  };

  const handleCartHoverLeave = () => {
    setShowCartHover(false);
  };

  return (
    <div className="cart flex items-center justify-center gap-7  min760:gap-5">
      {isLoggingOut ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />} />
          <span className="text-sm ml-3">Çıkış yapılıyor...</span>
        </div>
      ) : isSuccess ? (
        <div
          className="user-icon flex items-center cursor-pointer"
          onClick={logout}
        >
          {/* Logout ikon ve metni */}
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
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
          </svg>

          <button className="text-sm ml-2 tracking-wide">Çıkış Yap</button>
        </div>
      ) : (
        <div
          className="user-icon flex items-center cursor-pointer"
          onClick={() => navigate("/auth")}
        >
          {/* Mevcut Üye Girişi ikon ve metni */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <button className="text-sm ml-2 tracking-wide md1000:text-xs min760:hidden">
            Üye Girişi
          </button>
        </div>
      )}

      <div className="cart-icon-length w-10 relative">
        <div
          onClick={() => navigate("/cart")}
          className="cart-icon flex items-center justify-between cursor-pointer min760:flex-col"
          onMouseEnter={handleCartHoverEnter}
          onMouseLeave={handleCartHoverLeave}
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
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          {showCartHover && <CartHover showCartHover={showCartHover} />}
          {/* CartHover bileşenini burada gösteriliyor */}
          <div className="text-sm">{cartItems && cartItems.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
