import { describe, it, expect } from 'vitest';
import GameResult from '../GameResult';
import { renderWithProviders } from '../../../utils/test-utils';
import { setupStore } from '../../../lib/redux/store';
import { initialState, setWinner } from '../../../lib/redux/gameStatsSlice';
import { GameStatus } from '../../../lib/types/gameStats';

describe('GameResult Component', () => {
  describe('when game is not over', () => {
    const store = setupStore({ gameStats: initialState });

    it('should not render result', () => {
      const { container } = renderWithProviders(<GameResult />, { store });

      expect(container.firstChild).toBeNull();
    });
  });

  describe('when player won', () => {
    const store = setupStore({
      gameStats: initialState,
      player: {
        isConnected: true,
        isLoggedin: true,
        userName: 'test',
        sessionId: 'sessionId',
        turnState: GameStatus.PLAY,
      },
    });

    it('should render result as winner', async () => {
      const { getByText } = renderWithProviders(<GameResult />, { store });

      await store.dispatch(setWinner('test'));

      expect(getByText('You won')).toBeInTheDocument();
    });
  });

  describe('when player lost', () => {
    const store = setupStore({
      gameStats: initialState,
      player: {
        isConnected: true,
        isLoggedin: true,
        userName: 'test',
        sessionId: 'sessionId',
        turnState: GameStatus.WAIT,
      },
    });

    it('should render result as loser', async () => {
      const { getByText } = renderWithProviders(<GameResult />, { store });

      await store.dispatch(setWinner('winner'));

      expect(getByText('You lose')).toBeInTheDocument();
    });
  });
});
