import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Ecommerce, Tienda de Electrodomesticos</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/Tv`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>TV</NavLink>
                <NavLink to={`/category/equipodesonido`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Equipos de Sonidos</NavLink>
                <NavLink to={`/category/Microondas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Microondas</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;