import { describe, it, expect } from 'vitest';
import Header from '../Header';
import { renderWithProviders } from '../../../utils/test-utils';
import { setupStore } from '../../../lib/redux/store';
import {
  initialState,
  setGameRoom,
  setGameStarted,
} from '../../../lib/redux/gameStatsSlice';
import type { Room } from '../../../lib/types/gameStats';

describe('Header Component', () => {
  describe('when game is not started', () => {
    const gameStats = initialState;

    it('should render main title', () => {
      const { getByText } = renderWithProviders(<Header />, {
        preloadedState: { gameStats },
      });

      expect(getByText('Game of Three')).toBeInTheDocument();
    });
  });

  describe('when game is started', () => {
    const store = setupStore();
    const selectedRoom: Room = {
      name: 'Test Room',
      id: '1',
      owner: '1',
      type: 'cpu',
    };

    it('should render room name', async () => {
      const { getByText } = renderWithProviders(<Header />, { store });

      await store.dispatch(setGameStarted());
      await store.dispatch(setGameRoom(selectedRoom));

      expect(
        getByText(`Playing with ${selectedRoom.name}`),
      ).toBeInTheDocument();
    });
  });
});
