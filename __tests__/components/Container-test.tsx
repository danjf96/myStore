/**
 * @format
 */

import 'react-native';
import React from 'react';
import Container from '../../src/components/Container';
import { render } from 'react-native-testing-library';

describe('Render component', () => {
    it('renders correctly', async () => { 
        const screen = render( <Container />)
        expect(screen.toJSON()).toMatchSnapshot()
    });

})