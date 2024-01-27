import Line from "../../utils/Line";

const ProductDetailInfo = ({ singleProduct }) => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <h3>Ürün Bilgileri</h3>
        <Line />
      </div>

      <ul className="ml-5 text-sm list-disc mt-5 space-y-2">
        <li className="underline font-semibold">{singleProduct?.brand}</li>
        <li>{singleProduct?.description}</li>
        <li>
          <div className="flex items-center h-8 gap-x-2">
            <span className="font-semibold">Ürün stok adedi</span>
            <span className="text-orange-500"> {singleProduct?.stock}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductDetailInfo;
