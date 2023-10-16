import { describe, it, expect } from 'vitest';
import { renderWithProviders } from '../../utils/test-utils';
import { NotFoundScreen } from '../NotFound';

describe('NotFoundScreen Component', () => {
  it('should be rendered', () => {
    const { container } = renderWithProviders(<NotFoundScreen />, {});
    expect(container).toBeInTheDocument();
  });
});
