import React from 'react';
import { shallow } from 'enzyme'

import CounterApp from '../CounterApp';



describe('Pruebas en el <CounterApp />', () => {
    //Le pongo un valor por defecto al wrapper, para que el visual
    //sepa los métodos que tiene al escribir un .
    let wrapper = shallow( <CounterApp /> );

    //ciclo de vida
    beforeEach( () =>  {
        //Se ejecuta antes de cada evaluación, 1 vez por prueba

        wrapper = shallow( <CounterApp /> );

    });


    //Debe mostrar <CounterApp /> correctamente (hacer match con un snapshot)
    //Y sus valores por defecto
    test('debe de mostrar <CounterApp /> correctamente', () => {
       
        
        expect( wrapper ).toMatchSnapshot();

    });

    //Debe de mostrar el valor por defecto de 100
    //Usar el wrapper.find tomando el elemento html donde se muestra el
    //valor del contador
    test('debe de mostrar el valor por defecto de 100 ', () => {
        
        const wrapper = shallow( <CounterApp value={ 100 } /> );

        const counterText = wrapper.find('h2').text().trim();
        //trim para sacar los espacios de ambos lados
        expect( counterText ).toBe('100');

    })

    test('debe de incrementar con el botón +1', () => {

        
        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('11');

    })

    test('debe de decrementar con el botón -1', () => {
        
        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect( counterText ).toBe('9');

    });


    test('debe de colocar el valor por defecto con el btn reset', () => {
        
        const wrapper = shallow( <CounterApp value={ 105 } /> );

        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe('105');

    })
    
    
    
    

})
