import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return(
        <nav>
            <h1>Tienda de Electrodomesticos</h1>
            <div>
                <button>Tv</button>
                <button>Equipos de Sonido</button>
                <button>Microondas</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar;