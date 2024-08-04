/* eslint-disable react/prop-types */
import './ButtonNavBar.css'

export default function ButtonNavBar({nombre}){
    const handleClick = () => {
        alert(`Dirigiendote a ${nombre}`);
      };

    return (
        <>
        <button className='buttonNav' onClick={handleClick} >
            {nombre}
        </button>
        </>
    )
}