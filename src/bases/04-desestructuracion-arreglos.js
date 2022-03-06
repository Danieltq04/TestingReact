const useState = (valor) =>{
    return [valor, ()=>{console.log("Hola mundo")}];
}

const [nombre, setNombre] = useState("Daniel");

console.log(nombre)
setNombre();