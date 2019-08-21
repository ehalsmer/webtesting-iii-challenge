import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';

// Snapshot test
describe('<Dashboard/>', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})

async function buttonClick(btn){
    fireEvent.click(butn);
}

describe('button events', () => {
    it('Display should show "locked" after clicking "lock gate"', () => {
        let lockedMock = false;
        let closedMock = true;
        render(<Display locked={lockedMock} closed={closedMock}/>)
        const { getByText, queryByText } = render(<Controls locked={lockedMock} closed={closedMock}/>);
        const lockGateBtn = getByText(/lock\sgate/i);
        fireEvent.click(lockGateBtn);
        expect(queryByText(/locked/i)).toBeTruthy();
    })
})

