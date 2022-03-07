import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'

import PrimeraApp from '../PrimeraApp';


describe('Pruebas en <PrimeraApp />', () => {
    
    // test('debe de mostrar el mensaje "Prueba Hola Mundo"', () => {
    //     const saludo = 'Prueba Hola Mundo';
    //     const { getByText } = render( <PrimeraApp saludo={ saludo } /> );
    //     expect( getByText( saludo ) ).toBeInTheDocument();
    // })

    test('debe de mostrar <PrimeraApp /> correctamente', () => {

        const saludo = 'Prueba Hola Mundo';
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );
        //wrapper tiene todo el contenido renderizado
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = 'Hola, Soy Goku';
        const subTitulo = 'Soy un subtitulo';

        const wrapper = shallow( 
            <PrimeraApp 
                saludo={ saludo }
                subtitulo={ subTitulo }
            /> 
        );
        //find similar al query selector
        const textoParrafo = wrapper.find('p').text();
        
        expect( textoParrafo ).toBe( subTitulo );

    })
    
    
    

})
