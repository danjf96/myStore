/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import ProductCard from '../../src/components/ProductCard';
import moment from 'moment';
import { fireEvent, render } from 'react-native-testing-library';
const onPress = jest.fn();

describe('Render component', () => {
    const fakeValue = { name:'test', image:'http://lorempixel.com/640/480/food', price: 100, stock: 1, createdAt: moment().format('DD/MM/YYYY'), id:'1'}
    it('renders correctly', async () => { 
        const screen = render( <ProductCard {...fakeValue}/>)
        expect(screen.toJSON()).toMatchSnapshot()
    });

    test('click card', () => {
        const onPress = jest.fn();
        const { getByTestId } = render( <ProductCard testId='product' onPress={onPress} {...fakeValue}/>)
        fireEvent(getByTestId('product'), 'press')
        expect(onPress).toBeCalled()
    })

    test('change quantity', () => {
        const onPress = jest.fn();
        const onPressQuantity = jest.fn();
        const { getByText } = render( <ProductCard 
            number={0} testId='product' 
            onPress={onPress} {...fakeValue}
            onPressQuantity={onPressQuantity}
            quantity={true}
        />)

        fireEvent(getByText('+'), 'press')
        expect(onPressQuantity).toBeCalled()

        fireEvent(getByText('-'), 'press')
        expect(onPressQuantity).toBeCalled()
    })

})



   
 
   