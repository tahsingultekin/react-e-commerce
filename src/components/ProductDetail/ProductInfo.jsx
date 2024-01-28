import { useContext, useEffect, useState } from "react";
import Line from "../../utils/Line";
import ProductDetailInfo from "../ProductDetailInfo/ProductDetailInfo";
import { SingleContext } from "../../context/SingleProductProvider";
import { useParams } from "react-router-dom";
import { CurrencyFormat } from "../../utils/CurrencyFormat";
import { CartContext } from "../../context/CartProvider";
import { Spin, message } from "antd";

const ProductInfo = () => {
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const {
    singleProduct,
    fetchSingleProduct,
    setLoading,
    loading,
    spinnerContainerStyle,
  } = useContext(SingleContext);
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    const loader = async () => {
      setLoading(true);
      await fetchSingleProduct(id);
      setLoading(false);
    };
    loader();
  }, [id]);

  const incrementQuantity = () => {
    if (selectedQuantity < singleProduct?.stock) {
      setSelectedQuantity((prevQuantity) => prevQuantity + 1);
    } else {
      message.warning("Stok miktarından fazla ürün ekleyemezsiniz.");
    }
  };

  const decrementQuantity = () => {
    if (selectedQuantity > 1) {
      setSelectedQuantity((prevQuantity) => prevQuantity - 1);
    } else {
      message.warning("Minimum ürün adedi 1 den az olamaz.");
    }
  };

  const handleAddToCart = () => {
    const productWithQuantity = {
      ...singleProduct,
      quantity: selectedQuantity,
    };
    addToCart(productWithQuantity);
    // Sepete ekleme işlemi başarılı olduğunda mesajı göster
    message.success("Ürün başarıyla sepete eklendi!");
  };

  const handleQuantityChange = (event) => {
    const value = event.target.value;
    const newQuantity = parseInt(value, 10);

    if (value === "") {
      // Kullanıcı input alanını boşaltırsa, geçici olarak boş string kabul et
      setSelectedQuantity("");
    } else if (isNaN(newQuantity) || newQuantity < 1) {
      // Sayısal olmayan bir değer girilirse veya 1'den küçükse, hata ver ve 1'e ayarla
      message.warning("Minimum ürün adedi 1 den az olamaz.");
      setSelectedQuantity(1);
    } else if (newQuantity > singleProduct?.stock) {
      // Stok miktarını aşarsa, hata ver ve stok miktarına ayarla
      message.warning(
        `Stokta yeterli ürün yok. Maksimum adet: ${singleProduct?.stock}`
      );
      setSelectedQuantity(singleProduct?.stock);
    } else {
      // Sayısal bir değer ve geçerli bir miktar girilirse, güncelle
      setSelectedQuantity(newQuantity);
    }
  };

  return (
    <>
      {loading && (
        <div style={spinnerContainerStyle}>
          <Spin size="large" />
        </div>
      )}
      <div className="flex flex-col mb-10 min760:mb-1 min500:w-[350px]">
        <div className="my-10">
          <div className="flex flex-col gap-3 ">
            <h3 className="text-3xl ml-5 md1000:text-2xl md1000:ml-0">
              {singleProduct?.title}
            </h3>
            <hr />
            <span className="block text-4xl font-light ml-5 md1000:text-2xl md1000:ml-0">
              {CurrencyFormat(singleProduct?.price)}
            </span>
          </div>

          <hr className="my-3" />

          <div className="relative my-5">
            <span className="block md1000:text-lg">Mevcut Seçenekler:</span>
            <Line />
          </div>

          <hr className="my-3" />

          <div className=" flex gap-5 bg-white min760:items-center pl-10 min760:w-[500px] min760:pl-0 min500:w-[330px]">
            <div className="flex relative w-16 h-12 min760:items-center">
              <input
                onChange={handleQuantityChange}
                type="text"
                className="w-12 h-12 border outline-none text-lg text-center text-gray-500 min760:h-10"
                value={selectedQuantity}
              />
              <span className="flex flex-col absolute top-0 right-0 h-full border min760:items-center min760:h-10 min760:top-1 min760:text-xs min760:-right-[6px]">
                <i
                  onClick={incrementQuantity}
                  className="fa-solid fa-chevron-up border border-slate-500 text-gray-400 h-6 flex justify-center items-center cursor-pointer hover:opacity-70 min760:h-5 min760:w-5 "
                ></i>
                <i
                  onClick={decrementQuantity}
                  className="fa-solid fa-chevron-down h-6 border border-slate-500 text-gray-400 flex justify-center items-center cursor-pointer hover:opacity-70 min760:h-5 min760:w-5"
                ></i>
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-black py-1 px-3 text-white text-xs min760:h-10"
            >
              SEPETE EKLE
            </button>
            <button className="bg-lime-500 py-1 px-3 text-white flex justify-center items-center transition-all hover:bg-[#0D52D6] min760:h-10 min500:hidden">
              <span>
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </span>
              <span className="ml-3 text-xs">WHATSAPP DETAY SOR</span>
            </button>
          </div>
        </div>

        <div className="product-detail-info">
          <ProductDetailInfo singleProduct={singleProduct} />
        </div>
        <div className="hidden z-[999] min760:block  fixed bottom-0 left-0 right-0 mx-auto w-[500px] min500:w-full">
          <div className=" flex gap-5 h-14 bg-white min760:items-center pl-10 min760:pl-0 min500:justify-evenly min500:gap-0">
            <div className="flex relative w-16 h-12 min760:items-center ">
              <input
                onChange={handleQuantityChange}
                type="text"
                className="w-12 h-12 border outline-none text-lg text-center text-gray-500 min760:h-10"
                value={selectedQuantity}
              />
              <span className="flex flex-col absolute top-0 right-0 h-full border min760:items-center min760:h-10 min760:top-1 min760:text-xs min760:-right-[6px]">
                <i
                  onClick={incrementQuantity}
                  className="fa-solid fa-chevron-up border border-slate-500 text-gray-400 h-6 flex justify-center items-center cursor-pointer hover:opacity-70 min760:h-5 min760:w-5 "
                ></i>
                <i
                  onClick={decrementQuantity}
                  className="fa-solid fa-chevron-down h-6 border border-slate-500 text-gray-400 flex justify-center items-center cursor-pointer hover:opacity-70 min760:h-5 min760:w-5"
                ></i>
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-black py-1 px-3 text-white text-xs min760:h-10"
            >
              SEPETE EKLE
            </button>
            <button className="bg-lime-500 py-1 px-3 text-white flex justify-center items-center transition-all hover:bg-[#0D52D6] min760:h-10 ">
              <span>
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </span>
              <span className="ml-3 text-xs min500:hidden">
                WHATSAPP DETAY SOR
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
