import React from 'react';
import './CartWidget.css';
import shoppingcart from './Assets/shoppingcart.png';

const CartWidget = () => {
    return (
        <div className='CartWidget'>
            <img className='CartIcon' src={shoppingcart} alt="cart-widget"/>
            <span className='CartCount'>0</span>
        </div>
    );
}

export default CartWidget;