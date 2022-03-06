const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}


const saludar3 = (nombre)=> `Hola, ${nombre}`;

const getUser = () =>({
    uid: "1234",
    username: "Ddd"
})
//Paréntesis para que no se confunda las llaves con el inicio de la función


console.log(saludar2("Daniel"));
console.log(saludar3("Daniel"));
console.log(getUser());


$('#list2').click(()=>{
    const randomName = names[Math.floor(Math.random() * names.length)];
    console.log(randomName);
    $('#p2').slideToggle('slow');
    
    document.querySelectorAll('span')[1].classList.toggle('span');
    if(document.querySelectorAll('span')[1].classList.value == "span"){
        console.log("muestra",)
        document.querySelector('#p2').textContent = `${randomName}`
    }
    document.querySelector('#rotar1').classList.toggle('rotate')
})