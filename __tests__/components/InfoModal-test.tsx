/**
 * @format
 */

 import 'react-native';
 import React from 'react';
 import InfoModal from '../../src/components/InfoModal';
 import { fireEvent, render } from 'react-native-testing-library';
 
describe('Render component', () => {
    it('renders correctly', async () => { 
        const screen = render( <InfoModal image={0} title={''} text={''} onPress={function (): void {
            throw new Error('Function not implemented.');
        } } />)
        expect(screen.toJSON()).toMatchSnapshot()
    });

    test('text and functions', async () => {
        const onPress = jest.fn();
        const onPressSecond = jest.fn();
        const screen = render( <InfoModal image={0} 
                title={'TITLE'} 
                text={'TEXT'} 
                textButton={'ONE'} 
                textSecondButton='TWO' 
                onPress={onPress} 
                onPressSecondButton={onPressSecond}
            />
        )
        const { getByText, getAllByText } = screen

        expect(getAllByText(/TITLE|TEXT|ONE|TWO/)).toHaveLength(4);

        fireEvent(getByText('ONE'), 'press');
        expect(onPress).toHaveBeenCalled();

        fireEvent(getByText('TWO'), 'press');
        expect(onPressSecond).toHaveBeenCalled();

    })
 
 })