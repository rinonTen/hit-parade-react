import React, {useState, useContext } from 'react'
import { Context } from '../context';
import CartItems from '../Components/CartItems';

export default function Cart() {
  const { cartItems, setCartItems, removeSong } = useContext(Context);
  // Handle the buy button
  const [buyBtnText, setBuyBtnText] = useState("Buy");

  async function buyPlace() {
    // Change the text
    setBuyBtnText('Buying...')
    setTimeout(() => {
      setBuyBtnText("Bought")
    }, 3000);
    // Empty the cart
    setTimeout(() => {
     setCartItems([]);
    }, 5000);
  }

  const cartItemsElement = cartItems.map(item => {
    return <CartItems key={item.id} removeSong={() => removeSong(item.id)} song={item} />
  })

  // Total price
  let totalPrice = 0;
  let pricesArr = cartItems.map(item => item.price);
  if (pricesArr.length > 0) {
    totalPrice = pricesArr.reduce((total, price) => total + price);
  }

  const buttonAndTotalEl = pricesArr.length > 0 ?
    <div className="order-song">
      <button className="order-btn" onClick={buyPlace}>{buyBtnText} </button>
      <p className="total-price">Total: Ar {totalPrice}</p>
    </div> : <p>You can choose any item now!</p>;

  return (
    <div className="cart--container">
      {cartItemsElement}
      {buttonAndTotalEl}
    </div>
  )
}
