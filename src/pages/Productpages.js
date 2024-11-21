import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import ProductGallery from "../components/pages/ProductGallery";
import ProductDetails from "../components/pages/ProductDetails";
import RelatedProducts from "../components/pages/RelatedProducts";
import ReviewsSection from "../components/pages/ReviewsSection";

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from the URL
  const { getProductById } = useContext(ProductContext);
  const product = getProductById(id); // Fetch product details

  if (!product) return <div>Loading...</div>; // Loading state

  return (
    <>
      <Navbar />
      <div className="product-page">
        <ProductGallery images={product.images} />
        <ProductDetails product={product} />
        <ReviewsSection productId={id} />
        <RelatedProducts categoryId={product.categoryId} />
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
