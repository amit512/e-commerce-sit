import React, { useState, useEffect } from 'react';
import styles from './BannerSlider.css';

const bannerImages = [
  {
    src: '/assets/images/bannerimg/bann1.jpg',
    title: 'iPhone 14 Series',
    description: 'Up to 10% off Voucher',
  },
  {
    src: '/assets/images/bannerimg/a.jpg',
    title: 'New Headphones',
    description: 'Best Sound Quality',
  },
  {
    src: '/assets/images/bannerimg/bann1.jpg',
    title: 'Smartwatches',
    description: '50% off on select models',
  },
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through the banners every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 5000); // 5 seconds per slide

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  // Handle dot navigation
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="banner">
      {/* Image Carousel */}
      {bannerImages.map((image, index) => (
        <img
          key={index}
          src={image.src}
          alt={image.title}
          className={currentIndex === index ? 'active' : ''}
        />
      ))}

      {/* Banner Content */}
      <div className="banner-content">
        <h3>{bannerImages[currentIndex].title}</h3>
        <p>{bannerImages[currentIndex].description}</p>
        <button>Shop Now →</button>
      </div>

      {/* Dots Navigation */}
      <div className="dots">
        {bannerImages.map((_, index) => (
          <span
            key={index}
            className={currentIndex === index ? styles.active : ''}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
