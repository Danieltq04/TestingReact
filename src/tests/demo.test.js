
//npm i -D --exact jest-watch-typeahead@0.6.5

describe('pruebas en el archivo demo.test.js', () => { 
    test('Debe ser iguales los strings', () => { 
        //1. Inicialización
        const mensaje = "Hola mundo";
    
        //2. Estímulo
        const mensaje2 = `Hola mundo`
        
        //3. Observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    
    })
    
 })

