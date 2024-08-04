/* eslint-disable react/prop-types */
import './OrderButtons.css';

const OrderButtons = ({ onOrderCoffee, onOrderDonut }) => {
    return (
        <div className="order-buttons">
            <button className="orderButton" onClick={onOrderCoffee}>Pedir Café</button>
            <button className="orderButton" onClick={onOrderDonut}>Pedir Dona</button>
        </div>
    );
};

export default OrderButtons;
