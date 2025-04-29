import React, { useState } from 'react';
import './BuyNow.css';

const BuyNowPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [promoCode, setPromoCode] = useState('');
  
  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };
  
  const handlePromoCodeChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleSubmit = () => {
    alert("Purchase Confirmed! Thank you for your order.");
    // Add functionality to handle purchase
  };

  return (
    <div className="buy-now-page">
      <div className="course-details">
        <img src="course-image.jpg" alt="Course Image" className="course-image" />
        <div className="course-info">
          <h1 className="course-title">Learn React for Beginners</h1>
          <p className="course-desc">An in-depth guide to mastering React. Build projects and become a React pro!</p>
          <p className="course-duration">Duration: 6 weeks</p>
          <p className="course-level">Level: Beginner</p>
        </div>
      </div>

      <div className="pricing-section">
        <p className="original-price">₹5000</p>
        <p className="discount-price">₹3000</p>
        <p className="final-price">Final Price: ₹3000</p>

        <div className="promo-code">
          <input 
            type="text" 
            value={promoCode} 
            onChange={handlePromoCodeChange} 
            placeholder="Enter promo code" 
            className="promo-input"
          />
        </div>
      </div>

      <div className="payment-method">
        <h3>Select Payment Method</h3>
        <label>
          <input 
            type="radio" 
            value="Credit/Debit Card" 
            checked={paymentMethod === 'Credit/Debit Card'} 
            onChange={handlePaymentChange} 
          />
          Credit/Debit Card
        </label>
        <label>
          <input 
            type="radio" 
            value="PayPal" 
            checked={paymentMethod === 'PayPal'} 
            onChange={handlePaymentChange} 
          />
          PayPal
        </label>
        <label>
          <input 
            type="radio" 
            value="UPI" 
            checked={paymentMethod === 'UPI'} 
            onChange={handlePaymentChange} 
          />
          UPI
        </label>
      </div>

      <div className="confirm-purchase">
        <button className="confirm-btn" onClick={handleSubmit}>Confirm Purchase</button>
      </div>
    </div>
  );
}

export default BuyNowPage;
