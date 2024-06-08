// import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

beforeAll(() => {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
  };
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/добавить/i);
  expect(linkElement).toBeInTheDocument();
});