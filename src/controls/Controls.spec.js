import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'

import Controls from './Controls';

// snapshot
describe('<Controls/>', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Controls />);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})

// button text based on t/f of locked, closed
describe('buttons', () => {
    it('Button should show "unlock gate" if locked', () => {
        const { getByText } = render(<Controls locked={true}/>)
        getByText(/unlock\sgate/i)
    })
    it('Button should show "lock gate" if unlocked', () => {
        const { getByText } = render(<Controls locked={false}/>)
        getByText(/lock\sgate/i)
    })
    it('Button should show "open gate" if closed', () => {
        const { getByText } = render(<Controls closed={true}/>)
        getByText(/open\sgate/i)
    })
    it('Button should show "close gate" if open', () => {
        const { getByText } = render(<Controls closed={false}/>)
        getByText(/close\sgate/i)
    })
})