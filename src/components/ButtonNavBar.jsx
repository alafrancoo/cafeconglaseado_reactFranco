/* eslint-disable react/prop-types */
import './ButtonNavBar.css'
import { Link } from 'react-router-dom';

export default function ButtonNavBar({nombre, destino}){
    return (
        <>
        <Link to={destino} className='buttonNav'>
            {nombre}
        </Link>
        </>
    )
}