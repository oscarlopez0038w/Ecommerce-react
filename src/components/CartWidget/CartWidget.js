// CartWidget.js
import React, { useContext } from 'react';
import './CartWidget.css';
import shoppingcart from './Assets/shoppingcart.png';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className='CartWidget'>
            <img className='CartImg' src={shoppingcart} alt="cart-widget" />
            {totalQuantity > 0 && <span className="CartQuantity">{totalQuantity}</span>}
        </Link>
    );
}

export default CartWidget;