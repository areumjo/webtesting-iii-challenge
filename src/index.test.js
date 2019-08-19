// snapshot testing
import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display/Display';

describe('<Display />', () => {
    it('Snapshot matches', () => {
        const display_container = renderer.create(<Display />);
        expect(display_container.toJSON()).toMatchSnapshot();
    });
});