import { useEffect, useState } from "react";
import { Slider } from "antd";
import PropTypes from "prop-types";
import { CurrencyFormat } from "../../utils/CurrencyFormat";

const PriceRangeSlider = ({ products, onPriceChange }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [currentRange, setCurrentRange] = useState([0, 1000]);

  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map((product) => product.price);
      const newMinPrice = Math.min(...prices);
      const newMaxPrice = Math.max(...prices);
      setMinPrice(newMinPrice);
      setMaxPrice(newMaxPrice);
      setCurrentRange([newMinPrice, newMaxPrice]);
    }
  }, [products]);

  const onSliderChange = (values) => {
    setCurrentRange(values);
    onPriceChange(values);
  };

  return (
    <div className="w-full">
      {products.length > 0 ? (
        <div>
          <Slider
            range
            min={minPrice}
            max={maxPrice}
            value={currentRange}
            onChange={onSliderChange}
            trackStyle={{ backgroundColor: "black" }}
          />

          <div className="w-full flex justify-center gap-3">
            <span>{CurrencyFormat(currentRange[0])}</span>
            <span>-</span>
            <span>{CurrencyFormat(currentRange[1])}</span>
          </div>
        </div>
      ) : (
        <p>Ürünler yükleniyor...</p>
      )}
    </div>
  );
};
export default PriceRangeSlider;

PriceRangeSlider.propTypes = {
  products: PropTypes.array,
  onPriceChange: PropTypes.func,
};
