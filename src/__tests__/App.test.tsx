import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  it('renders Vite and React logos', () => {
    render(<App />);
    const viteLogo = screen.getByAltText('Vite logo');
    const reactLogo = screen.getByAltText('React logo');
    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  it('renders the initial count as 0', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    expect(button).toBeInTheDocument();
  });

  it('increments the count when the button is clicked', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /count is 0/i });
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /count is 1/i })).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByRole('button', { name: /count is 2/i })).toBeInTheDocument();
  });

  it('renders the "Edit src/App.tsx" paragraph', () => {
    render(<App />);
    const paragraph = screen.getByText(/Edit src App.tsx and save to test HMR/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the "Click on the Vite and React logos" paragraph', () => {
    render(<App />);
    const paragraph = screen.getByText(/Click on the Vite and React logos to learn more/i);
    expect(paragraph).toBeInTheDocument();
  });

  it('renders the Vite and React links with correct target', () => {
    render(<App />);
    const viteLink = screen.getByRole('link', { name: /Vite logo/i });
    const reactLink = screen.getByRole('link', { name: /React logo/i });

    expect(viteLink).toHaveAttribute('href', 'https://vite.dev');
    expect(viteLink).toHaveAttribute('target', '_blank');

    expect(reactLink).toHaveAttribute('href', 'https://react.dev');
    expect(reactLink).toHaveAttribute('target', '_blank');
  });

  it('renders the h1 with correct text', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: /Vite \+ React/i });
    expect(heading).toBeInTheDocument();
  });
});