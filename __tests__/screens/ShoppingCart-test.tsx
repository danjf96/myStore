/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import ShoppingCart from '../../src/screens/shoppingCart';
 import { fireEvent, render, waitFor } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import store from '../../src/store';
import { CARTSTATE, Types } from '../../src/store/ducks/shoppingCart/types';
  
 const component = (
    <Provider store={store} > <ShoppingCart navigation={{ navigate: (screen:'string') => null }}/> </Provider>
  );
 it('renders correctly', async () => {
   const screen = render(component)
   expect(screen.toJSON()).toMatchSnapshot()
 });
  
describe('more tests', () => {
    const storeCart = store.getState().shoppingCart
    const fakeValues:CARTSTATE[] = [{ 
        createdAt: "2019-09-02T12:58:54.103Z",
         id: "1",
         image: "http://lorempixel.com/640/480/food",
         name: "Rustic Metal Fish",
         price: 289.00,
         stock: 65171,
         number: 1
     }]

    test('list empty', () => {   
        expect(storeCart.cart).toHaveLength(0)
    })

    test('list', async () => {   
        const screen = render(component)
        store.dispatch({ type: Types.CHANGE, payload: { cart: fakeValues }})
        await waitFor( () => {
            const cart = store.getState().shoppingCart.cart
            expect(cart).not.toHaveLength(0)
            expect(screen.getAllByTestId('cart')).not.toHaveLength(0)
        })
    })

    test('change quantity', async () => {   
        const { getAllByTestId, getByText } = render(component)
        store.dispatch({ type: Types.CHANGE, payload: { cart: fakeValues }})
        const card = getAllByTestId('cart')[0]
        fireEvent( getByText('+') , 'press')
        expect(getByText('2')).toBeTruthy()

        fireEvent( getByText('-') , 'press')
        expect(getByText('1')).toBeTruthy()
    })

})