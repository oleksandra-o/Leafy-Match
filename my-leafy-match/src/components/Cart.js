import React from 'react';

const TAX_RATE = 0.09; // Arizona's tax rate for example
const SHIPPING_COST = 9.99; // Flat shipping cost

const Cart = ({ cartItems }) => {
  // Function to calculate subtotal price
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Calculate tax and total
  const tax = subtotal * TAX_RATE;
  const total = subtotal + tax + SHIPPING_COST;

  // Format the prices to two decimal places
  const formatPrice = (price) => price.toFixed(2);

  return (
    <div className="container my-5">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${formatPrice(item.price)}
              </li>
            ))}
          </ul>
          <p><strong>Subtotal:</strong> ${formatPrice(subtotal)}</p>
          <p><strong>Tax:</strong> ${formatPrice(tax)}</p>
          <p><strong>Shipping Cost:</strong> ${formatPrice(SHIPPING_COST)}</p>
          <p><strong>Total Price:</strong> ${formatPrice(total)}</p>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
 
 );
};

export default Cart;