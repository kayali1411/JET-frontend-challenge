import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../utils/test-utils';
import { LoginScreen } from '../Login';

describe('LoginScreen Component', () => {
  it('should be rendered', () => {
    const { container } = renderWithProviders(<LoginScreen />, {});
    expect(container).toBeInTheDocument();
  });
});
