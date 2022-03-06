import React from 'react';
import PropTypes from 'prop-types'
//{saludo = "Hola mundo"} valor por defecto si no se le pasa uno
const PrimeraApp = ({saludo, subtitulo})=>{
    if(!saludo){
        throw new Error("No existe saludo")
    }
    return (
        <>
            <h1>{saludo}</h1>
            <p>{subtitulo}</p>
        </>
    )
}
//Obligar a enviarle un string
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo"
}
export default PrimeraApp