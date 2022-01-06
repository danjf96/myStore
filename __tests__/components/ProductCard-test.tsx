/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import ProductCard from '../../src/components/ProductCard';
import moment from 'moment';
import { render } from 'react-native-testing-library';

describe('Render component', () => {
    const fakeValue = { name:'test', image:'http://lorempixel.com/640/480/food', price: 100, stock: 1, createdAt: moment().format('DD/MM/YYYY'), id:'1'}
    it('renders correctly', async () => { 
        const screen = render( <ProductCard {...fakeValue}/>)
        expect(screen.toJSON()).toMatchSnapshot()
    });


})



   
 
   