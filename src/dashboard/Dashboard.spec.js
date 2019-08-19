// Test away
import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';

describe('<Dashboard /', () => {
    const { queryByText } = render(<Dashboard />);
    it('Gate display?', () => {
        const closeBtn = queryByText('Close Gate');
        expect(closeBtn);
        const openBtn = queryByText('Open Gate');
        expect(openBtn);
        const lockedBtn = queryByText('Lock Gate');
        expect(lockedBtn);
        const unlockedBtn = queryByText('Unlock Gate');
        expect(unlockedBtn);
    })
})