import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import Contacts from '../Contacts/Contacts';
import ContactForm from '../Contacts/ContactForm';

describe("Testing Contacts component", () => {
    it("should render a table with  ", () => {
        const { getByText } = render(<Contacts />);
        const table = getByText('Contacts');
        const actions = getByText('Actions');
        expect(table).toBeInTheDocument();
        expect(actions).toBeInTheDocument();
    });

    it("Contact Form - Save button should be disabled when no fields are filled up", () => {
        const { getByTestId } = render(<ContactForm opened={true} />);
        const button = getByTestId('saveBtn');
        expect(button).toBeDisabled();
    });

    it("Contact Form - Save button should be disabled when validation does not pass", () => {
        const { getByTestId, getByText } = render(<ContactForm opened={true} />);

        // Get email field and enter invalid value
        const email = getByTestId('email').querySelector('input[type="email"]');
        fireEvent.change(email, { target: { value: 'abcdefg' } });

        // const errorMsg = getByText('Invalid email address');
        // expect(errorMsg).toBeDefined();

        // Save button should still be disabled
        const button = getByTestId('saveBtn');
        expect(button).toBeDisabled();
    });

    it("Contact Form - Save button should be enabled when validation passes", () => {
        const { getByTestId } = render(<ContactForm opened={true} />);

        // Get first name, last name and email fields
        const first = getByTestId('firstName').querySelector('input[type="text"]');
        const last = getByTestId('lastName').querySelector('input[type="text"]');
        const email = getByTestId('email').querySelector('input[type="email"]');
        // enter valid values
        fireEvent.change(first, { target: { value: 'John' } });
        fireEvent.change(last, { target: { value: 'Doe' } });
        fireEvent.change(email, { target: { value: 'abc@def.com' } });

        // Save button should be enabled
        const button = getByTestId('saveBtn');
        expect(button).toBeEnabled();
    });



});
