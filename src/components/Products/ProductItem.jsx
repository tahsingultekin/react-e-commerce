import { CurrencyFormat } from "../../utils/CurrencyFormat";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartProvider";
import { message } from "antd";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    const productWithQuantity = {
      ...product,
      quantity: 1, // Bu ürün için sabit miktar
    };
    addToCart(productWithQuantity);
    message.success("Ürün başarıyla sepete eklendi!");
  };

  return (
    <div className=" w-64 h-96 rounded-b-lg flex flex-col justify-between items-center m-2 shadow-lg">
      <div
        onClick={() => navigate(`/product/${product.id}`)}
        className="overflow-hidden w-full h-56 rounded-t-lg"
      >
        <img
          src={product.thumbnail}
          alt={product.category}
          className="w-full h-full object-cover object-center  hover:scale-105 transition-all  cursor-pointer "
        />
      </div>
      <div className="w-60 h-24 flex flex-col px-3 py-2 gap-2 ">
        <a
          href="#"
          className="w-full font-semibold "
          onClick={() => navigate(`/product/${product.id}`)}
        >
          {product.title}
        </a>
        <span className="block text-[#E51C20] font-semibold">
          {CurrencyFormat(product.price)}
        </span>
      </div>
      <button
        className="w-36  py-2 px-4 mb-3 text-sm text-center transition-all border border-slate-500 bg-black text-white hover:bg-white hover:text-black"
        onClick={handleAddToCart}
      >
        SEPETE EKLE
      </button>
    </div>
  );
};

export default ProductItem;

ProductItem.propTypes = {
  product: PropTypes.object,
};
