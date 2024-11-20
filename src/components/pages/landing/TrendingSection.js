import React from "react";
import ProductCard from "../../common/ProductCard"; // Reusable product card
import styles from "./TrendingSection.module.css";

const trendingProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "/assets/products/headphones.png",
    price: 500.0,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Smartphone X10",
    image: "/assets/products/smartphone.png",
    price: 30000.0,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Gaming Console",
    image: "/assets/products/console.png",
    price: 40000.0,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Digital Camera",
    image: "/assets/products/camera.png",
    price: 25000.0,
    rating: 4.6,
  },
];

const TrendingSection = () => {
  return (
    <div className={styles.trendingSection}>
      <h2 className={styles.title}>Trending Products</h2>
      <div className={styles.productsContainer}>
        {trendingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default TrendingSection;
