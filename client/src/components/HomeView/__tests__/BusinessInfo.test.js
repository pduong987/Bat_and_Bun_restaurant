import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import BusinessInfo from '../BusinessInfo';
import { afterEach, expect } from '@jest/globals';

afterEach(() => {
  cleanup();
});

test("Should render business info component", () => {
  render(<BusinessInfo />);
  const businessInfoElement = screen.getByTestId('business-info');
  expect(businessInfoElement).toBeInTheDocument();
});

test("Matches snapshot", () => {
  const tree = renderer.create(<BusinessInfo />).toJSON();
  expect(tree).toMatchSnapshot();
});
