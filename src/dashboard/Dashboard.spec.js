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

describe('buttons', () => {
    it('should show "unlock gate" if locked', () => {
        let lockedMock = true;
        // let closedMock = true;
        const { getByText, queryByText } = render(<Controls locked={lockedMock}/>)
        expect(queryByText(/unlock\sgate/i)).toBeTruthy()
    })
    it('should show "lock gate" if unlocked', () => {
        let lockedMock = false;
        // let closedMock = true;
        const { getByText, queryByText } = render(<Controls locked={lockedMock}/>)
        expect(queryByText(/lock\sgate/i)).toBeTruthy()
    })
    it('should show "open gate" if closed', () => {
        // let lockedMock = false;
        let closedMock = true;
        const { getByText, queryByText } = render(<Controls closed={closedMock}/>)
        expect(queryByText(/open\sgate/i)).toBeTruthy()
    })
    it('should show "close gate" if open', () => {
        // let lockedMock = false;
        let closedMock = false;
        const { getByText, queryByText } = render(<Controls closed={closedMock}/>)
        expect(queryByText(/close\sgate/i)).toBeTruthy()
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

