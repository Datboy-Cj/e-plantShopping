import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';
import { money } from './plants.js';

function CartItem({ onContinueShopping }) {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const [checkoutMessage, setCheckoutMessage] = useState('');

  // Unit prices and totals are integer cents; money() formats them for display.
  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.id));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  const handleContinueShopping = (event) => {
    event.preventDefault();
    onContinueShopping();
  };

  const handleCheckout = () => {
    setCheckoutMessage('Coming Soon — checkout is not available yet.');
  };

  return (
    <main className="cart-page cart-container">
      <div className="page-heading">
        <span className="eyebrow">YOUR GROWING COLLECTION</span>
        <h1>Your little paradise.</h1>
        <p aria-live="polite">Total number of plants: <strong>{calculateTotalQuantity()}</strong></p>
      </div>
      <div className="cart-layout">
        <div className="cart-items">
          {cart.length === 0 && (
            <div className="empty">
              <span aria-hidden="true">✳</span>
              <h2>Room for something green.</h2>
              <p>Your cart is empty.</p>
            </div>
          )}
          {cart.map(item => (
            <article className="cart-item" key={item.id}>
              <img className="cart-item-image" src={item.image} alt={item.name} />
              <div className="cart-details cart-item-details">
                <h2 className="cart-item-name">{item.name}</h2>
                <p className="cart-item-cost">Unit price: {money(item.price)}</p>
                <div className="quantity-control cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    aria-label={`Decrease ${item.name}`}
                    onClick={() => handleDecrement(item)}
                  >−</button>
                  <span className="cart-item-quantity-value" aria-label={`${item.name} quantity`}>
                    {item.quantity}
                  </span>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    aria-label={`Increase ${item.name}`}
                    onClick={() => handleIncrement(item)}
                  >+</button>
                </div>
              </div>
              <div className="item-end">
                <strong className="cart-item-total">{money(calculateTotalCost(item))}</strong>
                <span>Item total</span>
                <button
                  className="delete cart-item-delete"
                  aria-label={`Delete ${item.name}`}
                  onClick={() => handleRemove(item)}
                >Delete</button>
              </div>
            </article>
          ))}
        </div>
        <aside className="summary">
          <h2>Order summary</h2>
          <div><span>Plants</span><span>{calculateTotalQuantity()}</span></div>
          <div className="total total_cart_amount" aria-live="polite">
            <span>Total Cart Amount</span><strong>{money(calculateTotalAmount())}</strong>
          </div>
          <p>A little closer to a greener home.</p>
          <button className="get-started-button1" disabled={!cart.length} onClick={handleCheckout}>
            Checkout <span aria-hidden="true">↗</span>
          </button>
          {checkoutMessage && <p className="notice" role="status">{checkoutMessage}</p>}
          <div className="continue_shopping_btn">
            <button className="continue get-started-button" onClick={handleContinueShopping}>
              ← Continue Shopping
            </button>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default CartItem;
