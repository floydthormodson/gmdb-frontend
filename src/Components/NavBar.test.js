import { render, screen } from '@testing-library/react';
import NavBar from './NavBar';

test('renders learn react link', () => {
  render(<NavBar />);
  const titleElement = screen.getByText(/gmdb/i);
  expect(titleElement).toBeInTheDocument();
});
