// Test away!
import React from 'react';
import Display from './Display';

import { render, fireEvent } from '@testing-library/react';


describe('<Display />', () => {
    it('Is gate open?', () => {
        const { getByText } = render(<Display />);
        expect(getByText('Open'))
    })
    it('Locked gate?', () => {
        const { getByText } = render(<Display locked={true} />);
        expect(getByText('Locked'));        
    })
})