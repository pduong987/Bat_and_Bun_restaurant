import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import AboutView from '../AboutView';
import { afterEach, expect } from '@jest/globals';

afterEach(() => {
  cleanup();
});

test("Should render about component", () => {
  render(<AboutView />);
  const aboutViewElement = screen.getByTestId('about-view');
  expect(aboutViewElement).toBeInTheDocument();
});

test("Matches snapshot", () => {
  const tree = renderer.create(<AboutView />).toJSON();
  expect(tree).toMatchSnapshot();
});
