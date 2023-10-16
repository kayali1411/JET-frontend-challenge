import { describe, it, expect } from 'vitest';
import { fireEvent } from '@testing-library/react';
import LoginForm from '../LoginForm';
import { renderWithProviders } from '../../../utils/test-utils';

describe('LoginForm Component', () => {
  it('should render the component', () => {
    const { getByText, getByPlaceholderText } = renderWithProviders(
      <LoginForm />,
      {},
    );

    expect(getByText('Please enter a username to login')).toBeInTheDocument();
    expect(getByPlaceholderText('username')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should handle username input change', async () => {
    const { getByPlaceholderText } = renderWithProviders(<LoginForm />, {});

    const usernameInput = getByPlaceholderText('username');
    await fireEvent.change(usernameInput, { target: { value: 'testuser' } });

    expect(usernameInput).toHaveValue('testuser');
  });

  it('should show an error for empty username', async () => {
    const { getByText } = renderWithProviders(<LoginForm />, {});

    const submitBtn = getByText('Login');
    await fireEvent.click(submitBtn);

    expect(getByText('Username is required!')).toBeInTheDocument();
  });

  it('should show an error for username contains space only', async () => {
    const { getByText, getByPlaceholderText } = renderWithProviders(
      <LoginForm />,
      {},
    );

    const usernameInput = getByPlaceholderText('username');
    await fireEvent.change(usernameInput, { target: { value: '   ' } });

    const submitBtn = getByText('Login');
    await fireEvent.click(submitBtn);

    expect(getByText('Username is required!')).toBeInTheDocument();
  });
});
