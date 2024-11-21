import React from 'react';
import '../styles/ProductPage.css';

const ProductPage = () => {
  const product = {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 120,
    reviews: 45,
    rating: 4.5,
    images: [
      '/assets/products/headphone1.jpg',
      '/assets/products/headphone2.jpg',
      '/assets/products/headphone3.jpg',
    ],
    
    relatedProducts: [
      {
        id: 2,
        name: 'Bluetooth Speaker',
        price: 80,
        image: '/assets/products/speaker.jpg',
      },
      {
        id: 3,
        name: 'Wireless Earbuds',
        price: 100,
        image: '/assets/products/earbuds.jpg',
      },
    ],
  };

  return (
    <div className="product-page">
      {/* Product Image Gallery */}
      <div className="product-gallery">
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index + 1}`} />
        ))}
      </div>

      {/* Product Information */}
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <div className="price-reviews">
          <span className="price">${product.price}</span>
          <span className="reviews">{product.rating} ⭐ ({product.reviews} reviews)</span>
        </div>

        {/* Action Buttons */}
        <div className="product-actions">
          <button className="btn add-to-cart">Add to Cart</button>
          <button className="btn wishlist">Add to Wishlist</button>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="related-products-grid">
          {product.relatedProducts.map((related) => (
            <div key={related.id} className="related-product-card">
              <img src={related.image} alt={related.name} />
              <h3>{related.name}</h3>
              <p>${related.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
