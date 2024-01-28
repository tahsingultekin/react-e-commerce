import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Spin } from "antd";
import { useParams } from "react-router-dom";
import { SingleContext } from "../../context/SingleProductProvider";
import "./thumbSlider.css";

const ProductGallery = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const closeOverlay = () => {
    setShowOverlay(false);
  };

  const goToNext = (event) => {
    event.stopPropagation();
    if (activeIndex < singleProduct.images.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const goToPrev = (event) => {
    event.stopPropagation();
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  const openOverlayFromSelectedImage = () => {
    const index = singleProduct.images.findIndex(
      (image) => image === selectedImage
    );
    if (index !== -1) {
      setActiveIndex(index);
      setShowOverlay(true);
    }
  };

  const {
    selectedImage,
    setSelectedImage,
    singleProduct,
    fetchSingleProduct,
    loading,
    setLoading,
    spinnerContainerStyle,
  } = useContext(SingleContext);

  const { id } = useParams();

  useEffect(() => {
    const loader = async () => {
      setLoading(true);
      await fetchSingleProduct(id);
      setLoading(false);
    };
    loader();
  }, [id]);

  return (
    <>
      {loading && (
        <div style={spinnerContainerStyle}>
          <Spin size="large" />
        </div>
      )}
      <div className="thumb-slider md1000:h-auto min500:w-[300px] ">
        <div className="thumbnail-container ">
          {singleProduct?.images.map((item, index) => {
            return (
              <img
                onClick={() => setSelectedImage(item)}
                className={item === selectedImage ? "active" : ""}
                src={item}
                alt="img"
                key={index}
              />
            );
          })}
        </div>
        <div
          className="selected-image cursor-pointer"
          onClick={openOverlayFromSelectedImage}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full md1360:w-[300px] min760:w-[250px]"
            />
          )}
        </div>
      </div>
      {showOverlay && (
        <div className="overlay" onClick={closeOverlay}>
          <button className="prev" onClick={(e) => goToPrev(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <img src={singleProduct.images[activeIndex]} alt="Overlay" />
          <button className="next" onClick={(e) => goToNext(e)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ProductGallery;

ProductGallery.propTypes = {
  product: PropTypes.object,
};
