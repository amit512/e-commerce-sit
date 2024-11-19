import React, { useState } from "react";
import styles from "../styles/landing/CategoriesSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faLaptop,
  faClock,
  faCamera,
  faHeadphones,
  faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const categories = [
  { name: "Phones", icon: faMobileAlt },
  { name: "Computers", icon: faLaptop },
  { name: "SmartWatch", icon: faClock },
  { name: "Camera", icon: faCamera },
  { name: "HeadPhones", icon: faHeadphones },
  { name: "Gaming", icon: faGamepad },
];

const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleMouseEnter = (index) => setActiveCategory(index);
  const handleMouseLeave = () => setActiveCategory(null);

  return (
    <div className={styles.categoriesSection}>
      <div className={styles.header}>
        <span className={styles.categoryIndicator}></span>
        <h2 className={styles.sectionTitle}>Browse By Category</h2>
      </div>
      <div className={styles.carousel}>
        {categories.map((category, index) => (
          <div
            key={index}
            className={`${styles.categoryCard} ${
              activeCategory === index ? styles.active : ""
            }`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <FontAwesomeIcon icon={category.icon} className={styles.iconStyle} />
            <p className={styles.categoryName}>{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
