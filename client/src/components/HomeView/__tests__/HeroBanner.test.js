import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import HeroBanner from '../HeroBanner';
import { afterEach, expect } from '@jest/globals';

const imgUrl = "./img/hero-image.jpg";

afterEach(() => {
  cleanup();
});

test("Should render hero banner component that has a background image", () => {
  render(<HeroBanner imgUrl={imgUrl} />);
  const heroBannerElement = screen.getByTestId('hero-image');
  expect(heroBannerElement).toBeInTheDocument();
  expect(heroBannerElement).toHaveStyle(`background-image: url(${imgUrl})`);
});

test("Matches snapshot", () => {
  const tree = renderer.create(<HeroBanner imgUrl={imgUrl} />).toJSON();
  expect(tree).toMatchSnapshot();
});
