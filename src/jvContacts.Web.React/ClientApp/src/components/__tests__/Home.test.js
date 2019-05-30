import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import Home from '../Home/Home';

describe("Testing Home component", () => {
    it("should render the homepage with title ", () => {
        const { getByTestId } = render(<Home />);
        const home = getByTestId('home');
        expect(home).toHaveTextContent('jvContacts - Demo');
    });
});
