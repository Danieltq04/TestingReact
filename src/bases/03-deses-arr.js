

const personajes = ['Nombre1','Nombre2','Nombre3'];
const [ , , p3 ] = personajes;



export const retornaArreglo = () =>{
    return ['ABC', 123];
}

// const [ letras, numeros ] = retornaArreglo(); 



// Tarea
// 1. el primer valor del arr se llamarĂ¡ nombre
// 2. se llamarĂ¡ setNombre
const useState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}




