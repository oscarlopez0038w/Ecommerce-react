import React from 'react';
import PropTypes from 'prop-types';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = React.useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div>
            <div className='counter'>
                <div className='Controls'>
                    <button className="Button" onClick={decrement}>-</button>
                    <h4 className='Number'>{quantity}</h4>
                    <button className="Button" onClick={increment}>+</button>
                </div>
            </div>
            <div>
                <button className="Button" onClick={() => onAdd(quantity)} disabled={stock === 0}>
                    {stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
                </button>
            </div>
        </div>
    );
};

ItemCount.propTypes = {
    stock: PropTypes.number.isRequired,
    initial: PropTypes.number.isRequired,
    onAdd: PropTypes.func.isRequired,
};

export default ItemCount;