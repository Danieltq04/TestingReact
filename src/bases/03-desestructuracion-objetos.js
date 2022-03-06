const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
}

const {nombre, edad: edad, clave} = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const retornaPersona = ({nombre, edad, clave})=>{

    return {
        nombreClave: nombre, 
        edadClave: edad, 
        claveClave: clave,
        latlng: {
            lat: 465.424,
            lng: 4432.213,
        }
    }
}
const {nombreClave, edadClave, latlng:{lat,lng}} = retornaPersona(persona);

console.log(nombreClave, edadClave, lat, lng)