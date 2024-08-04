/* eslint-disable react/prop-types */
import './CartWidget.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CartWidget = ({ itemCount, onClick }) => {
    return (
        <div className="cartWidget" onClick={onClick}>
            {/* <FontAwesomeIcon icon="fa-solid fa-cart-shopping"/> */} 
            {/* Todavia no logro decifrar como resolver lo de los iconos:( */}
            {itemCount > 0 && <span className="itemCount">{itemCount}</span>}
        </div>
    );
};

export default CartWidget;