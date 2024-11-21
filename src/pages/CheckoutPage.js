import React, { useState } from "react";
import styles from "./CheckoutPage.module.css";

const CheckoutPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    couponCode: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  // Mocked order summary data
  const orderSummary = [
    { name: "Phone A", price: 299.99, quantity: 1 },
    { name: "Headphones", price: 499.99, quantity: 2 },
  ];

  // Calculate total price
  const subtotal = orderSummary.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = couponApplied ? subtotal * 0.1 : 0; // 10% discount if coupon is applied
  const total = subtotal - discount;

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Apply coupon
  const handleApplyCoupon = () => {
    if (formData.couponCode === "DISCOUNT10") {
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code!");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }
    alert("Order placed successfully!");
    // Proceed to backend API call for order placement here
  };

  return (
    <div className={styles.checkoutPage}>
      <h1 className={styles.heading}>Checkout</h1>
      <div className={styles.container}>
        {/* Shipping Details Form */}
        <form className={styles.shippingForm} onSubmit={handleSubmit}>
          <h2>Shipping Details</h2>
          <div className={styles.formGroup}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Address:</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              rows="3"
              required
            ></textarea>
          </div>
          <div className={styles.formGroup}>
            <label>Phone:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Coupon Code:</label>
            <input
              type="text"
              name="couponCode"
              value={formData.couponCode}
              onChange={handleInputChange}
            />
            <button type="button" className={styles.applyButton} onClick={handleApplyCoupon}>
              Apply
            </button>
          </div>
          <h2>Payment Method</h2>
          <div className={styles.paymentOptions}>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="Card"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              Card
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="PayPal"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              PayPal
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>
            Place Order
          </button>
        </form>

        {/* Order Summary */}
        <div className={styles.orderSummary}>
          <h2>Order Summary</h2>
          <ul>
            {orderSummary.map((item, index) => (
              <li key={index}>
                {item.name} (x{item.quantity}) - Rs.{(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <p>Subtotal: Rs.{subtotal.toFixed(2)}</p>
          {couponApplied && <p>Discount: -Rs.{discount.toFixed(2)}</p>}
          <p className={styles.total}>Total: Rs.{total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
