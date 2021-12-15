import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import IconLink from '../IconLink';
import { afterEach, expect } from '@jest/globals';

const linkName = 'test link name';
const linkUrl = 'https://google.com';
const linkIcon = './img/uber-eats-icon.png';

afterEach(() => {
  cleanup();
});

test("Should render icon link component that has a href", () => {
  render(<BrowserRouter><IconLink linkName={linkName} linkUrl={linkUrl} linkIcon={linkIcon} /></BrowserRouter>);
  const iconLinkElement = screen.getByTestId('link-icon');
  expect(iconLinkElement).toBeInTheDocument();
  expect(iconLinkElement).toHaveAttribute('href', 'https://google.com');
});

test("Should render icon link component that has an icon image", () => {
  render(<BrowserRouter><IconLink linkName={linkName} linkUrl={linkUrl} linkIcon={linkIcon} /></BrowserRouter>);
  const iconImageElement = screen.getByRole('img');
  expect(iconImageElement).toHaveAttribute('src', './img/uber-eats-icon.png');
});

test("Should render icon link component that has a link name", () => {
  render(<BrowserRouter><IconLink linkName={linkName} linkUrl={linkUrl} linkIcon={linkIcon} /></BrowserRouter>);
  const linkNameElement = screen.getByTestId('link-name');
  expect(linkNameElement).toHaveTextContent('test link name');
});

test("Matches snapshot", () => {
  const tree = renderer.create(<BrowserRouter><IconLink linkName={linkName} linkUrl={linkUrl} linkIcon={linkIcon} /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
