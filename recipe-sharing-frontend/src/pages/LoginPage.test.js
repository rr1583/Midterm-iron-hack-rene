import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders the login form', () => {
  render(<LoginPage />);
  expect(screen.getByText(/login/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});

test('allows the user to login', async () => {
    render(<LoginPage />);
    
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password' } });
    
    fireEvent.click(screen.getByText(/submit/i));
    
    // Assuming that the success message or redirection is based on a state change
    const successMessage = await screen.findByText(/login successful/i);
    expect(successMessage).toBeInTheDocument();
  });
  