import React from 'react';

const Cart = ({ cartItems }) => {
  // Function to calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container my-5">
      <h2>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <p><strong>Total Price:</strong> ${totalPrice}</p>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
