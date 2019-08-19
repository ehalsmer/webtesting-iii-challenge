import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import Controls from '../controls/Controls';

// Snapshot test
describe('<Dashboard/>', () => {
    it('matches snapshot', () => {
        const tree = renderer.create(<Dashboard />);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})

// jest.mock('state.locked', () => false)
// jest.mock('state.closed', () => false)

describe('toggleLocked function', () => {
    // const spy = jest.spyOn(Dashboard, 'Dashboard.toggleLocked');
    // console.log(spy)
    // it('sets state.locked to false if true', () => {
        
    // })
    // it('sets state.locked to true if false', () => {

    // })
    // it('Is disabled/does nothing if gate is open', () => {

    // })
})

describe('buttons', () => {
    it('should show unlock if locked and closed', () => {
        let lockedMock = true;
        let closedMock = true;
        const { getByText, queryByText } = render(<Controls locked={lockedMock} closed={closedMock}/>)
        expect(queryByText(/unlock/i)).toBeTruthy()
    })
})
