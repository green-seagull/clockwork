import { render, screen } from '@testing-library/react';
import App from './App';
import MockDate from 'mockdate';

test('renders current time', () => {
  MockDate.set('2021-06-14 20:00:00')

  render(<App />);
  const linkElement = screen.getByText(/20:00:00/i);
  expect(linkElement).toBeInTheDocument();
});
