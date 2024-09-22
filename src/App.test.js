import { render, screen } from '@testing-library/react';
import App from './App';
import Weather from './Weather';


test('renders learn react link', () => {
  render(<App />);
  render(<Weather/>)
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
