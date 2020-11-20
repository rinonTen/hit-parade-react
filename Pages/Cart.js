import React, {useContext} from 'react'
import { Context } from '../context';
import CartItems from '../Components/CartItems';

export default function Cart() {
    const { cartItems } = useContext(Context); 
   
    const cartItemsElement = cartItems.map(item => {
        return <CartItems key={item.id} song={item}/>
    })
    return (
        <div className="cart--container">
          {cartItemsElement} 
          <div className="order-song">
            <button className="order-btn">Buy</button>
            <p className="total-price"></p>
          </div>
        </div>
    )
}
