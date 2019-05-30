import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import Header from '../Header/Header';

describe("Testing Header component", () => {
    it("should render a jvContacts title ", () => {
        const { getByTestId } = render(<Header />);
        const header = getByTestId('header');
        expect(header).toHaveTextContent('jvContacts');
    });
    it("should have a menu button", () => {
        const { getByTestId } = render(<Header />);
        const menu = getByTestId('menu');
        expect(menu).toBeDefined();
    });

});
