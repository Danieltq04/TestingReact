import { getUser, getUserActive } from "../../bases/02-objetoc-implicitos"



describe('Prueba en 02-objetoc-implicitos', () => { 
    test('Debe retornar un objeto', () => { 
        const userTest = {
            uid: "1234",
            username: "Daniel"
        }

        const user = getUser();

        expect(user).toEqual(userTest);
     })

     test('Debe retornar un objeto con el nombre que recibe', () => { 
        const nombre = "Daniel";
        const userTest = {
            uid: "1234",
            username: nombre
        }

        const user = getUserActive(nombre);

        expect(user).toEqual(userTest);
     })
     //GetUsuarioActivo debe retornar un objeto
 })