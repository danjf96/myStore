/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Finish from '../../src/screens/finish';
 import { render } from 'react-native-testing-library';
import { Provider } from 'react-redux';
import store from '../../src/store';
 const component = (
  <Provider store={store} > <Finish navigation={{ navigate: (screen:'string') => null }}/> </Provider>
);
 it('renders correctly', async () => {
   const screen = render(component)
   expect(screen.toJSON()).toMatchSnapshot()
 });
  