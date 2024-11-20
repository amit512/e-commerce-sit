import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ product }) => {
  const { image, name, price, rating } = product;

  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>Rs.{price.toFixed(2)}</p>
        <div className={styles.rating}>
          {"⭐".repeat(Math.round(rating))}
          <span className={styles.ratingNumber}>({rating.toFixed(1)})</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
