// Test away!
import React from 'react';
import Controls from './Controls';

import { render, fireEvent } from '@testing-library/react';

describe("<Controls />", () => {
    it('Displays unlocked and closed when toggle "Close gate"? And able to click "Lock gate', () => {
        const closeFn = jest.fn();  
        const lockFn = jest.fn();

        const { queryByText } = render(<Controls toggleClosed={closeFn} toggleLocked={lockFn} locked={false} closed={true}/>);
        const unlockedBtn = queryByText('Unlock Gate');
        expect(unlockedBtn);

        const lockBtn = queryByText('Lock Gate');
        expect(lockBtn);
        fireEvent.click(lockBtn);
        expect(lockBtn.disabled).toBe(false);
        expect(lockFn).toBeCalled();
    });

    it('the locked toggle button is disabled if the gate is open?', () => {
        const unlockFn = jest.fn();

        const { queryByText } = render(<Controls locked={true} closed={true} toggleLocked={unlockFn} />);
        const unlockedBtn = queryByText('Unlock Gate');
        expect(unlockedBtn);

        const openBtn = queryByText('Open Gate');
        expect(openBtn);
        expect(openBtn.disabled).toBe(true);
        fireEvent.click(unlockedBtn);
        expect(unlockFn).toBeCalled();
      });
})