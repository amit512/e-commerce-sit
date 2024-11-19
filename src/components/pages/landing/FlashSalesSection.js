import React, { useState, useEffect } from "react";
import "../../../styles/landing/FlashSalesSection.css";

const Countdown = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const { days, hours, minutes, seconds } = prev;

        if (seconds > 0) return { ...prev, seconds: seconds - 1 };
        if (minutes > 0) return { ...prev, minutes: minutes - 1, seconds: 59 };
        if (hours > 0) return { ...prev, hours: hours - 1, minutes: 59, seconds: 59 };
        if (days > 0) return { ...prev, days: days - 1, hours: 23, minutes: 59, seconds: 59 };

        clearInterval(timer);
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flash-sales__countdown">
      <span>{String(timeLeft.days).padStart(2, "0")}:</span>
      <span>{String(timeLeft.hours).padStart(2, "0")}:</span>
      <span>{String(timeLeft.minutes).padStart(2, "0")}:</span>
      <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const discountedPrice = (product.originalPrice * (100 - product.discount)) / 100;

  return (
    <div className="flash-sales__product-card">
      <div className="flash-sales__discount-tag">-{product.discount}%</div>
      <img
        src={product.image}
        alt={product.name}
        className="flash-sales__product-image"
        loading="lazy"
      />
      <div className="flash-sales__product-details">
        <h4>{product.name}</h4>
        <p>
          <span className="flash-sales__current-price">
            Rs.{discountedPrice.toFixed(2)}
          </span>
          <span className="flash-sales__original-price">
            Rs.{product.originalPrice}
          </span>
        </p>
        <p>⭐ {product.rating} ({product.reviews} reviews)</p>
        <button className="flash-sales__add-to-cart">Add To Cart</button>
      </div>
    </div>
  );
};

const FlashSales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleSlides = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        // Simulating API call to a local JSON file
        const response = await fetch("/data/flashSales.json");
        if (!response.ok) throw new Error("Failed to load flash sale products");

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const nextSlide = () => {
    if (currentIndex < products.length - visibleSlides) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flash-sales">
      <h2>Today's Flash Sales</h2>
      <Countdown initialTime={{ days: 0, hours: 23, minutes: 59, seconds: 59 }} />

      {loading ? (
        <p>Loading flash sale products...</p>
      ) : error ? (
        <p className="flash-sales__error">Error: {error}</p>
      ) : (
        <>
          <div className="flash-sales__carousel">
            <button
              className="flash-sales__nav-btn flash-sales__nav-btn--prev"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous Slide"
            >
              ❮
            </button>
            <div className="flash-sales__carousel-wrapper">
              <div
                className="flash-sales__carousel-items"
                style={{ transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)` }}
              >
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
            <button
              className="flash-sales__nav-btn flash-sales__nav-btn--next"
              onClick={nextSlide}
              disabled={currentIndex >= products.length - visibleSlides}
              aria-label="Next Slide"
            >
              ❯
            </button>
          </div>
          <button className="flash-sales__view-all">View All Products</button>
        </>
      )}
    </div>
  );
};

export default FlashSales;
