import React, { useState } from "react";
import styles from "./Cart.module.css";

const Cart = () => {
  // Example cart data (replace this with data from your state management or API)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Phone A",
      price: 299.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Camera",
      price: 799.99,
      quantity: 1,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Headphones",
      price: 499.99,
      quantity: 2,
      image: "https://via.placeholder.com/150",
    },
  ]);

  // Function to handle quantity change
  const handleQuantityChange = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: action === "increment" ? item.quantity + 1 : Math.max(1, item.quantity - 1),
            }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // Calculate subtotal
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  
  // Handle Checkout
  const handleCheckout = () => {
    navigate("/checkout", { state: { cartItems, subtotal } }); // Pass data to Checkout Page
  };

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.heading}>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty. Add some products to get started!</p>
      ) : (
        <div className={styles.cartContainer}>
          {/* Cart Items List */}
          <div className={styles.cartItems}>
            {cartItems.map((item) => (
              <div className={styles.cartItem} key={item.id}>
                <img src={item.image} alt={item.name} className={styles.itemImage} />
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemPrice}>Price: Rs.{item.price.toFixed(2)}</p>
                  <div className={styles.quantityControl}>
                    <button
                      onClick={() => handleQuantityChange(item.id, "decrement")}
                      className={styles.quantityButton}
                    >
                      -
                    </button>
                    <span className={styles.quantity}>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, "increment")}
                      className={styles.quantityButton}
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className={styles.removeButton}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className={styles.cartSummary}>
            <h2>Cart Summary</h2>
            <p>Total Items: {cartItems.length}</p>
            <p>Total Price: Rs.{totalPrice.toFixed(2)}</p>
            <button className={styles.checkoutButton} onClick={handleCheckout} >Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
