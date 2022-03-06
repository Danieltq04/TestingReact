import React, {useState} from 'react';
import PropTypes from 'prop-types'


const CounterApp = ({value = 10})=>{

    const [counter,setCounter] = useState(value)

    const handleAdd = ()=>{
        //setCounter((c)=>c+1);//No se usa ++ porque cambiaría la constante
        setCounter(counter+1);//No se usa ++ porque cambiaría la constante
        //Cuando usamos el setCounter decimos que el contador cambió y 
        //Por consecuencia hay que volver a renderizar el componente
        //Aunque react sólo renderiza lo que cambió
    }
    //Si la función handleAdd tiene () se llama al renderizar
    //Si lo no ejecuto, paso la referencia
    const handleReset = ()=>{
        setCounter(value);
    }
    const handleSubstract = ()=>{
        setCounter(counter-1);
    }
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handleSubstract}>-1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAdd}>+1</button>
        </>
    )

}
CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp