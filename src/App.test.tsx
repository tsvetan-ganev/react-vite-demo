import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';
import { mockUsers } from './mocks/data';
import { server } from './mocks/node';

describe('App', () => {
  it('should go through the happy path of the login workflow', async () => {
    render(<App />);

    const usernameInupt = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const rememberMeCheckbox = screen.getByLabelText('Remember me');
    const submitButton = screen.getByRole('button');
    const user = mockUsers[0];

    // verify the correct HTTP call is made
    server.events.on('request:start', ({ request }) => {
      expect(request.method).toEqual('POST');
      expect(request.url.endsWith('/auth/login'));
    });

    // login
    await userEvent.type(usernameInupt, user.username);
    await userEvent.type(passwordInput, user.password);
    await userEvent.click(rememberMeCheckbox);
    await userEvent.click(submitButton);

    const h1 = screen.getByRole('heading');
    const logoutButton = screen.getByRole('button', {
      name: 'Logout',
    });
    expect(h1).toHaveTextContent(`Hi, ${user.username} 🤟!`);

    // logout
    await userEvent.click(logoutButton);

    // verify the username is pre-filled
    expect(screen.getByLabelText('Username')).toHaveValue(user.username);
  });

  it('should display server errors in the login form', async () => {
    render(<App />);

    const usernameInupt = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByRole('button');

    // try login
    await userEvent.type(usernameInupt, 'john.doe');
    await userEvent.type(passwordInput, 'mypassword123');
    await userEvent.click(submitButton);

    // verify there's an error displayed
    expect(screen.getByRole('alert')).toHaveTextContent(/Invalid credentials/i);
  });
});