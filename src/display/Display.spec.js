import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import Display from './Display';

describe('<Display/>', () => {
    // snapshot test
    it('matches snapshot', () => {
        const tree = renderer.create(<Display />);
        
        expect(tree.toJSON()).toMatchSnapshot();
    })
    //
    it('displays Open when closed = false', () => {
        let lockedMock = false;
        let closedMock = false;
        // const { getByText } = render(<Display locked={lockedMock} closed={closedMock}/>);
    })
})