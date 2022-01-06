/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import { render } from 'react-native-testing-library';
import Home from '../../src/screens/home';
  
 it('renders correctly', async () => {
   const screen = render( <Home />)
   expect(screen.toJSON()).toMatchSnapshot()
 });
  