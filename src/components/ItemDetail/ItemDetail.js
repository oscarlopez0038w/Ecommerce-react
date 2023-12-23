// ItemDetail.js
import './ItemDetail.css';
import React, { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0);
    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, name, price
        };

        addItem(item, quantity);
    }

    // Asegúrate de que la propiedad stock sea de tipo number
    const numericStock = typeof stock === 'string' ? parseInt(stock) : stock;

    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Categoria: {category}
                </p>
                <p className='Info'>
                    Descripcion: {description}
                </p>
                <p className='Info'>
                    Precio: C${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <Link to='/Cart' className='Option'> Terminar compra</Link>
                    ) : (
                        <ItemCount initial={1} stock={numericStock || 0} onAdd={handleOnAdd}/>
                    )
                }
            </footer>
        </article>
    );
}

export default ItemDetail;