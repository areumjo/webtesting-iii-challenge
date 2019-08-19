// Test away! -- mock
import React from 'react';
import Display from './Display';

import { render, fireEvent } from '@testing-library/react';


describe('<Display />', () => {
    it('Default to unlocked and open?', () => {
        const { getByText } = render(<Display />);
        expect(getByText('Open'));
        expect(getByText('Unlocked'));
    })
    it('Locked gate?', () => {
        const { getByText } = render(<Display locked={true} />);
        expect(getByText('Locked'));  
        //expect(getByText('Locked')).toHaveClass('locked')
      
    })
    it('Closed gate?', () => {
        const { getByText } = render(<Display closed={true} />);
        expect(getByText('Closed'));        
    })
    // it('locked or closed is red-led?', () => {
    //     const { getByText } = render(<Display />);
    //     expect(getByText.classList('lockedClass')).toBe(true)
    // })
})