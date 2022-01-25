import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup); //cleanup should be blue

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    });
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav />);  //asFragment should be blue
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
    const { getByLabelText } = render(<Nav />);  //getByLabelText should be blue
    expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
    
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        const { getByTestId } = render(<Nav />);   //getByTestId should be blue

        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
})
