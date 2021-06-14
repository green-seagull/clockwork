import { render, screen } from '@testing-library/react';
import DigitalClockface from './DigitalClockface';
import MockDate from 'mockdate';

test('renders current time', () => {
  MockDate.set('2021-06-14 7:00:00')

  render(<DigitalClockface />);
  const timeElement = screen.getByText(/07:00:00/i);
  expect(timeElement).toBeInTheDocument();
});

test('renders current date', () => {
  MockDate.set('2021-01-01 00:00:00')

  render(<DigitalClockface />);
  const dateElement = screen.getByText(/2021-01-01/i);
});
