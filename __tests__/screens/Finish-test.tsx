/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import Finish from '../../src/screens/finish';
 import { render } from 'react-native-testing-library';
  
 it('renders correctly', async () => {
   const screen = render( <Finish />)
   expect(screen.toJSON()).toMatchSnapshot()
 });
  