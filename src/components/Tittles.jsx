/* eslint-disable react/prop-types */
import './Tittles.css'

export default function Tittle({titulo, color}){
    const estiloTittle = {
        color: color,
    };

    return(
        <>
        <h1 className='MainTittle' style={estiloTittle}>{titulo}</h1>
        </>
    )
}