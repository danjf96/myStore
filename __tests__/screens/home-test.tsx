/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render, waitFor } from 'react-native-testing-library';
import Home from '../../src/screens/home';
import store from '../../src/store'
import { Provider } from 'react-redux';

const component = (
  <Provider store={store} > <Home /> </Provider>
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

  test('renders correctly products', async () => {

    const { getAllByTestId } = await waitFor(() =>
        render(component)
    ); 

    await fakeTime(2000)
    const list = store.getState().products.listProducts
    expect(list).not.toHaveLength(0)
    expect(getAllByTestId('product')).not.toHaveLength(0)

  });
  

}) 
  