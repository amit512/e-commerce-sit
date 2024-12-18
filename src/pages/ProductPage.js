import React, { useEffect, useState } from 'react';
import ProductCard from '../components/common/ProductCard';
import { Link } from 'react-router-dom';
import './ProductListingPage.css';

const ProductListingPage = () => {
  // Sample products to use as mock data
  const sampleProducts = [
    { id: 1, name: 'Phone A', price: 299.99, category: 'Phones', rating: 4, image: '/assets/products/phoneA.png' },
    { id: 2, name: 'Camera', price: 799.99, category: 'Computers', rating: 5, image: '/assets/products/camera.png' },
    { id: 3, name: 'Headphones', price: 499.99, category: 'Cameras', rating: 3, image: '/assets/products/headphones.png' },
    // Add more sample products as needed
  ];

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Simulate fetching products on component mount
  useEffect(() => {
    const fetchProducts = () => {
      setProducts(sampleProducts);           // Set products from mock data
      setFilteredProducts(sampleProducts);    // Set filteredProducts initially as all products
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-listing-page">
      <h1>Product Listing</h1>
      <div className="product-grid">
        {filteredProducts.map(product => (
          <Link to={`/product/${product.id}`}>
          <ProductCard key={product.id} product={product} /></Link>
        ))}
      </div>
    </div>
    
  );
};

export default ProductListingPage;
