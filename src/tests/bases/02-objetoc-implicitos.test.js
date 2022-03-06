import { getUser } from "../../bases/02-objetoc-implicitos"



describe('Prueba en 02-objetoc-implicitos', () => { 
    test('Debe retornar un objeto', () => { 
        const userTest = {
            uid: "1234",
            username: "Daniel"
        }

        const user = getUser();

        expect(user).toEqual(userTest);
     })
 })