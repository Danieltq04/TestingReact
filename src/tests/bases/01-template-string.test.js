import "@testing-library/jest-dom"
//Para los autocompletados de los expects
import { getSaludo } from "../../bases/01-template-string"



describe('Pruebas en 01-template-string', () => { 
    test('getSaludo debe retornar hola Pepe', () => { 
        const nombre = "Pepe";
        const saludo = getSaludo(nombre);
        expect(saludo).toBe("Hola "+nombre);
     })

     //getSaludo debe retornar Hola Carlos si no hay argumento en la función
     test('getSaludo debe retornar hola Carlos', () => { 
        const saludo = getSaludo();
        expect(saludo).toBe("Hola Carlos");
     })
 })