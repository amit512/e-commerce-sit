import React from "react";

const ProductGallery = ({ images }) => (
  <div className="product-gallery">
    {images.map((image, index) => (
      <img key={index} src={image} alt={`Product ${index}`} />
    ))}
  </div>
);

export default ProductGallery;
