/**
 * @format
 */

import 'react-native';
import React from 'react';
import Circle from '../../src/components/Circle';
import { render } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import store from '../../src/store';
import { CARTSTATE, Types } from '../../src/store/ducks/shoppingCart/types';

const component = (
    <Provider store={store} > <Circle /> </Provider>
);

const fakeValues:CARTSTATE[] = [{ 
    createdAt: "2019-09-02T12:58:54.103Z",
    id: "1",
    image: "http://lorempixel.com/640/480/food",
    name: "Rustic Metal Fish",
    price: 289.00,
    stock: 65171,
    number: 1
}]

describe('Render component', () => {
    it('renders correctly', async () => { 
        const screen = render(component)
        expect(screen.toJSON()).toMatchSnapshot()
    });

    test('render number props', () => {
        const screen = render(<Provider store={store} > <Circle number={2}/> </Provider>)
        expect(screen.getByText('2')).toBeTruthy()
    })

    test('render number', () => {
        const screen = render(component)
        store.dispatch({ type: Types.CHANGE, payload: { cart: fakeValues }})
        expect(screen.getByText('1')).toBeTruthy()
    })

})