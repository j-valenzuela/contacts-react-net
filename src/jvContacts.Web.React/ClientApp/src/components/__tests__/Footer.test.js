import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import Footer from '../Footer/Footer';

describe("Testing Footer component", () => {
    it("should render a copyright text ", () => {
        const { getByTestId } = render(<Footer />);
        const footer = getByTestId('footer');
        expect(footer).toHaveTextContent('Juan Valenzuela');
    });
});
