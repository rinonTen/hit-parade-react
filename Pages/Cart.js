import React, {useContext} from 'react'
import { Context } from '../context';
import CartItems from '../Components/CartItems';

export default function Cart() {
    const { cartItems, removeSong } = useContext(Context); 
   
    const cartItemsElement = cartItems.map(item => {
        return <CartItems key={item.id} removeSong={() => removeSong(item.id)} song={item}/>
    })

  // Total price
  let totalPrice = 0;
  let pricesArr = cartItems.map(item => item.price);  
  if (pricesArr.length > 0) {
     totalPrice = pricesArr.reduce((total, price) => total + price);
  }


    return (
        <div className="cart--container">
          {cartItemsElement} 
          <div className="order-song">
            <button className="order-btn">Buy</button>
            <p className="total-price">Total: {totalPrice}</p>
          </div>
        </div>
    )
}
