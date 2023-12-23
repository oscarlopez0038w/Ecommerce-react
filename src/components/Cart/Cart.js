// Cart.js
import './Cart.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    const { cart, clearCart, totalQuantity, } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to='/' className='Option'>Productos</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3 >Total: C${cart.reduce((acc, p) => acc + p.quantity * p.price, 0)}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/Checkout' className='Option'>Checkout</Link>
        </div>
    );
}

export default Cart;