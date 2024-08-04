/* eslint-disable no-undef */
import './App.css'
import React, { useState } from 'react';
import NavBar from './components/NavBar'
import Tittle from './components/Tittles'
import OrderButtons from './components/OrderButtons';
import colors from './styles/colors';

function App() {
  const [itemCount, setItemCount] = useState(0);

    const handleOrdenarCafe = () => {
        setItemCount(itemCount + 1);
    };

    const handleOrdenarDona = () => {
        setItemCount(itemCount + 1);
    };

    const handleCartClick = () => {
      console.log('Cart clicked!');
    };

  return (
    <>
      <NavBar itemCount={itemCount} onCartClick={handleCartClick} />
      <div className='PageContent'>
        <Tittle titulo={"Café con Glaseado"} color={colors.celeste}/>
        <OrderButtons onOrderCoffee={handleOrdenarCafe} onOrderDonut={handleOrdenarDona}/>
      </div>
    </>
  )
}

export default App
