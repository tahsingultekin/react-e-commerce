import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartProvider";
import { CurrencyFormat } from "../../../utils/CurrencyFormat";
import ConfirmModal from "../../ConfirmModel/ConfirmModal";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import MobileCart from "./MobileCart";

const CartTable = () => {
  const { updateProductQuantity, removeProductFromCart, cartItems } =
    useContext(CartContext);
  const navigate = useNavigate();

  const [tempQuantities, setTempQuantities] = useState({});

  const itemTotalPrice = (price, quantity) => price * quantity;

  const handleQuantityChange = (itemId, newQuantity) => {
    setTempQuantities((prev) => ({
      ...prev,
      [itemId]: newQuantity,
    }));
  };

  const increment = (product, itemId) => {
    if (product.quantity < product.stock) {
      setTempQuantities((prevQuantities) => {
        const currentQuantity =
          prevQuantities[itemId] !== undefined
            ? prevQuantities[itemId]
            : cartItems.find((item) => item.id === itemId).quantity;
        const newQuantity = currentQuantity + 1;
        return { ...prevQuantities, [itemId]: newQuantity };
      });
    }
  };

  const decrement = (product, itemId) => {
    const currentQuantity =
      tempQuantities[itemId] !== undefined
        ? tempQuantities[itemId]
        : product.quantity;

    const newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;

    setTempQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: newQuantity,
    }));
  };

  const handleUpdateQuantity = (itemId) => {
    const newQuantity = tempQuantities[itemId];
    const productInCart = cartItems.find((item) => item.id === itemId);
    const stockQuantity = productInCart ? productInCart.stock : 0;

    if (newQuantity !== undefined) {
      if (newQuantity < 1) {
        message.warning("Minimum ürün adedi 1 den az olamaz.");
        setTempQuantities((prev) => ({ ...prev, [itemId]: 1 }));
      } else if (newQuantity > stockQuantity) {
        message.warning(
          `Stokta yeterli ürün yok. Maksimum adet: ${stockQuantity}`
        );
        setTempQuantities((prev) => ({ ...prev, [itemId]: stockQuantity }));
      } else {
        updateProductQuantity(itemId, newQuantity);
        message.success("Ürün miktarı başarıyla güncellendi!");
      }
    }
  };

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
  };

  return (
    <>
      <MobileCart
        handleUpdateQuantity={handleUpdateQuantity}
        handleRemoveClick={handleRemoveClick}
        decrement={decrement}
        increment={increment}
        handleQuantityChange={handleQuantityChange}
        tempQuantities={tempQuantities}
        itemTotalPrice={itemTotalPrice}
        navigate={navigate}
      />
      <table className="cart-table mt-7 border max-w-[880px] min500:text-sm md1000:hidden">
        <thead>
          <tr className="bg-zinc-100">
            <td className="text-xs font-semibold text-slate-700 min-w-20 p-3">
              RESİM
            </td>
            <td className="text-xs tracking-wider font-semibold text-slate-700 min-w-96 p-3">
              ÜRÜN ADI
            </td>
            <td className="text-xs tracking-wider font-semibold text-slate-700 p-3">
              ADET
            </td>
            <td className="text-sm font-semibold text-slate-700 min-w-36 p-3">
              BİRİM FİYATI
            </td>
            <td className="text-xs tracking-wider font-semibold text-slate-700 min-w-24 p-3">
              TUTARI
            </td>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((item) => {
            return (
              <tr key={item?.id}>
                <td className="productImg p-3 align-middle">
                  <button
                    onClick={() => navigate(`/product/${item.id}`)}
                    href="#"
                  >
                    <img
                      src={item?.thumbnail}
                      alt={item?.thumbnail}
                      className="w-[60px] h-[60px]"
                    />
                  </button>
                </td>
                <td className="productName p-3 align-middle">
                  <button onClick={() => navigate(`/product/${item.id}`)}>
                    {item?.title}
                  </button>
                  <br />
                  <small>Miktar: {item?.quantity}</small>
                </td>
                <td className="btn-group p-3 align-middle">
                  <div className="input-group">
                    <div className="counter flex ">
                      <input
                        type="text"
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
                        className="relative  w-14 px-1 text-justify h-8 border border-slate-400 outline-none "
                      />
                      <div className="relative">
                        <i
                          onClick={() => increment(item, item.id)}
                          className="fa-solid fa-angle-up absolute top-0 right-0 cursor-pointer border border-slate-400 bg-slate-100 text-slate-500 hover:opacity-70"
                        ></i>
                        <i
                          onClick={() => decrement(item, item.id)}
                          className="fa-solid fa-angle-down absolute bottom-0 right-0 cursor-pointer border border-slate-400 bg-slate-100 text-slate-500 hover:opacity-70"
                        ></i>
                      </div>
                      <div className="btn-group flex justify-center items-center w-24 gap-2">
                        <button
                          onClick={() => handleUpdateQuantity(item.id)}
                          className="bg-blue-600 hover:bg-emerald-500 w-9 h-8 text-white rounded-md tooltip"
                        >
                          <span className="tooltiptext">Güncelle</span>
                          <i className="fa-solid fa-arrows-rotate"></i>
                        </button>
                        <button
                          onClick={() => handleRemoveClick(item?.id)}
                          className="bg-red-500 hover:bg-orange-500 w-9 h-8 text-white rounded-md tooltip"
                        >
                          <span className="tooltiptext">Kaldır</span>
                          <i className="fa-solid fa-circle-xmark"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="price p-3 align-middle">
                  {CurrencyFormat(item?.price)}
                </td>
                <td className="totalPrice p-3 align-middle">
                  {CurrencyFormat(itemTotalPrice(item.price, item.quantity))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ConfirmModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmRemoveProduct}
      />
    </>
  );
};

export default CartTable;
