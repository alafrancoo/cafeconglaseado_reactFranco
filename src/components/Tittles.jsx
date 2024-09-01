/* eslint-disable react/prop-types */

export default function Tittle(props){
    const estiloTittle = {
        color: props.color,
        textAlign: 'center',
        fontSize: '3rem'
    };

    return(
        <>
            <h1 className='MainTittle' style={estiloTittle}>{props.titulo}</h1>
        </>
    )
}