/* eslint-disable react/prop-types */
import './NavBar.css';
import ButtonNavBar from './ButtonNavBar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const NavBar = ({ itemCount, onCartClick }) => {
    return (
        <nav className='NavBar'>
            <Link to="/">
                <img src='./src/assets/donaLogo.jpg' alt='Inicio' className='Logo'/>
            </Link>
            <ButtonNavBar destino='/' nombre='Inicio'/>
            <ButtonNavBar destino='/delivery' nombre='Delivery'/>
            <ButtonNavBar destino='/menu' nombre='Menu'/>
            <ButtonNavBar destino='/contacto' nombre='Contacto'/>
            <CartWidget itemCount={itemCount} onClick={onCartClick} />
        </nav>
    );
};

export default NavBar;
