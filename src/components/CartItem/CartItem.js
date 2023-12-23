import './CartItem.css';
import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="CartItem">
            <p>{name}</p>
            <p>Cantidad: {quantity}</p>
            <p>Precio unitario: C${price}</p>
            <p>Total: C${quantity * price}</p>
            <button onClick={() => removeItem(id)}>X</button>
        </div>
    );
}

export default CartItem;