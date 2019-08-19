// Test away! -- mock
import React from 'react';
import Display from './Display';

import { render, fireEvent } from '@testing-library/react';
import { toHaveClass } from '@testing-library/jest-dom'


describe('<Display />', () => {
    it('Default to unlocked and open?', () => {
        const { getByText } = render(<Display />);
        expect(getByText('Open'));
        expect(getByText('Unlocked'));
    })
    it('Locked gate?', () => {
        const { getByText } = render(<Display locked={true} />);
        const locked = getByText('Locked');  
        expect(locked);
        expect(locked.toHaveClass('red-led'));
    })
    it('Closed gate?', () => {
        const { getByText } = render(<Display closed={true} />);
        expect(getByText('Closed'));        
    })
})