import 'jest-dom/extend-expect';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import App from '../App';

describe("Testing main App component", () => {
  global.window.matchMedia = jest.fn(() => {
    return {
      matches: false,
      addListener:
      jest.fn(),
      removeListener: jest.fn()
    }
  });

  it("should render with a header component ", () => {
    const { getByTestId } = render(<App />);
    const header = getByTestId('header');
    expect(header).toBeDefined();
  });

  it("should render with a menu component ", () => {
    const { getByTestId } = render(<App />);
    const sidebar = getByTestId('sidebar');
    expect(sidebar).toBeDefined();
  });

  it("should render with a workspace component ", () => {
    const { getByTestId } = render(<App />);
    const workspace = getByTestId('workspace');
    expect(workspace).toBeDefined();
  });

  it("should render with a footer component ", () => {
    const { getByTestId } = render(<App />);
    const footer = getByTestId('footer');
    expect(footer).toBeDefined();
  });


});
