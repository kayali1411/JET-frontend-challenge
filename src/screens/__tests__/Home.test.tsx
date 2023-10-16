import { describe, it, expect } from 'vitest';
import { HomeScreen } from '../Home';
import { renderWithProviders } from '../../utils/test-utils';

describe('HomeScreen Component', () => {
  it('should be rendered', () => {
    const { container } = renderWithProviders(<HomeScreen />, {});
    expect(container).toBeInTheDocument();
  });
});
