import { describe, it, expect } from 'vitest';
import RandomNumberDisplay from '../RandomNumberDisplay';
import { renderWithProviders } from '../../../utils/test-utils';
import { setupStore } from '../../../lib/redux/store';
import { initialState } from '../../../lib/redux/gameStatsSlice';

describe('RandomNumberDisplay Component', () => {
  describe('when game is not started', () => {
    const store = setupStore({ gameStats: initialState });

    it('should not render the number', () => {
      const { container } = renderWithProviders(<RandomNumberDisplay />, {
        store,
      });

      expect(container.firstChild).toBeNull();
    });
  });

  describe('when game started', () => {
    const store = setupStore({
      gameStats: {
        ...initialState,
        isStarted: true,
        initialNumber: 10,
      },
    });

    it('should render the number', async () => {
      const { getByText } = renderWithProviders(<RandomNumberDisplay />, {
        store,
      });

      expect(getByText('The started number is 10')).toBeInTheDocument();
    });
  });
});
