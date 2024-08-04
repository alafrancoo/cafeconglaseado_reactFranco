/* eslint-disable react/prop-types */
import './NavBar.css';
import ButtonNavBar from './ButtonNavBar'
import CartWidget from './CartWidget';

const NavBar = ({ itemCount, onCartClick }) => {
    return (
        <nav className='NavBar'>
            <a href="#"><img src='./src/assets/donaLogo.jpg' alt='Inicio' className='Logo'/></a>
            <ButtonNavBar destino='#' nombre='Inicio'/>
            <ButtonNavBar destino='' nombre='Delivery'/>
            <ButtonNavBar destino='' nombre='Menu'/>
            <ButtonNavBar destino='' nombre='Contacto'/>
            <CartWidget itemCount={itemCount} onClick={onCartClick} />
        </nav>
    );
};

export default NavBar;