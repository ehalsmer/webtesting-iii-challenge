import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect';


import Display from './Display';

describe('<Display/>', () => {
    // snapshot test
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);
        expect(tree.toJSON()).toMatchSnapshot();
    })
    // testing classes and text for locked/closed states
    it('Displays open with green background when open', () => {
        const { getByText } = render(<Display closed={false}/>);
        const open = getByText(/open/i)
        // expect(open.className).toMatch(/green-led/i);
        expect(open).toHaveClass('green-led')
    })
    it('Displays closed with red background when closed', () => {
        const { getByText } = render(<Display closed={true}/>);
        const closed = getByText(/closed/i);
        expect(closed).toHaveClass('red-led')
    })
    it('Displays locked with red background when locked', () => {
        const { getByText } = render(<Display locked={true}/>);
        const locked = getByText(/locked/i);
        expect(locked).toHaveClass('red-led')
    })
    it('Displays unlocked with green background when closed', () => {
        const { getByText } = render(<Display locked={false}/>);
        const unlocked = getByText(/unlocked/i);
        expect(unlocked).toHaveClass('green-led')
    })
})