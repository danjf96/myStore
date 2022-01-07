/**
 * @format
 */

import 'react-native';
import React from 'react';
import { act, fireEvent, render, waitFor } from 'react-native-testing-library';
import Home from '../../src/screens/home';
import store from '../../src/store'
import { Provider } from 'react-redux';

const component = (
  <Provider store={store} > <Home navigation={{ navigate: (screen:'string') => null }}/> </Provider>
);
const fakeTime = (time: number) => new Promise( (resolve, reject) => setTimeout( () => resolve(null) ,time))

it('renders correctly', async () => {
  const screen = render(component)
  expect(screen.toJSON()).toMatchSnapshot()
});

describe('test loading and render items or not', () => {
  const storeProducts = store.getState().products

  test('renders correctly loading', async () => {

    const { getByTestId, getAllByTestId } = render( component )   
    const list = store.getState().products.listProducts
    expect(list).toHaveLength(0)
    expect(getByTestId('loading')).toBeTruthy()

  });

  test('renders correctly card products', async () => {
    const onPress = jest.fn()
    const onPressSecond = jest.fn()

    const { getAllByTestId, getByTestId, getByText, update } = await waitFor(() =>
        render(component)
    ); 

    await waitFor( () => {
      const list = store.getState().products.listProducts
      const cart = store.getState().shoppingCart.cart
      expect(list).not.toHaveLength(0)
      expect(getAllByTestId('product')).not.toHaveLength(0)


      fireEvent(getAllByTestId('product')[0], 'press')
      expect(getByTestId('InfoModal').props.visible).toBe(true)
  
      fireEvent(getByText('CONTINUAR COMPRA'), 'press')
      expect(getByTestId('InfoModal').props.visible).toBe(false)
      expect(cart).not.toHaveLength(0)

      fireEvent(getAllByTestId('product')[1], 'press')
      expect(getByTestId('InfoModal').props.visible).toBe(true)
      fireEvent(getByText('CONTINUAR COMPRA'), 'press')
      expect(cart).toHaveLength(2)

      fireEvent(getAllByTestId('product')[0], 'press')
      fireEvent(getByText('CARRINHO'), 'press')
      const shoppingCart = store.getState().shoppingCart
      expect(shoppingCart.cart).not.toHaveLength(0)

    })

  });

  test('renders correctly card products', async () => {

    const { getAllByTestId, getByTestId, getByText, update } = await waitFor(() =>
        render(component)
    ); 
    const input = getByTestId('input')
    const searchButton = getByTestId('searchButton')
    fireEvent(input,'changeText', 'rustic')
    expect(input.props.value).toBe('rustic')

    fireEvent(searchButton,'press')
    expect(getByTestId('loading')).toBeTruthy()

    await waitFor( () => {
      const list = store.getState().products.listProducts
      expect(list).not.toHaveLength(0)
      expect(getAllByTestId('product')).not.toHaveLength(0)
    })

  });
  
}) 
  