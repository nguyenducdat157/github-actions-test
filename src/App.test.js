import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import React from 'react';

// eslint-disable-next-line no-undef
describe('App Component', () => {
  // eslint-disable-next-line no-undef
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    // eslint-disable-next-line no-undef
    expect(linkElement).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test('renders test github actions text', () => {
    render(<App />);
    const textElement = screen.getByText(/test github actions/i);
    // eslint-disable-next-line no-undef
    expect(textElement).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test('renders link with correct href', () => {
    render(<App />);
    const linkElement = screen.getByRole('link', { name: /learn react/i });
    // eslint-disable-next-line no-undef
    expect(linkElement).toHaveAttribute('href', 'https://reactjs.org');
  });

  // eslint-disable-next-line no-undef
  test('renders link with correct target and rel attributes', () => {
    render(<App />);
    const linkElement = screen.getByRole('link', { name: /learn react/i });
    // eslint-disable-next-line no-undef
    expect(linkElement).toHaveAttribute('target', '_blank');
    // eslint-disable-next-line no-undef
    expect(linkElement).toHaveAttribute('rel', 'noopener noreferrer');
  });

  // eslint-disable-next-line no-undef
  test('renders header element', () => {
    render(<App />);
    const headerElement = screen.getByRole('banner');
    // eslint-disable-next-line no-undef
    expect(headerElement).toBeInTheDocument();
  });

  // eslint-disable-next-line no-undef
  test('applies center text alignment style', () => {
    const { container } = render(<App />);
    const mainDiv = container.firstChild;
    // eslint-disable-next-line no-undef
    expect(mainDiv).toHaveStyle({ textAlign: 'center' });
  });

  // eslint-disable-next-line no-undef
  test('fails', () => {
    // eslint-disable-next-line no-undef
    expect(1).toBe(2);
  });
});