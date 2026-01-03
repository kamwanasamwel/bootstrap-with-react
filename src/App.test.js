import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders pizza cards', () => {
  const { getAllByText } = render(<App />);
  const pizzaButtons = getAllByText(/Order Pizza/i);
  expect(pizzaButtons.length).toBeGreaterThan(0);
});
