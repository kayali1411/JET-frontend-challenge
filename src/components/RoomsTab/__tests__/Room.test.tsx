import { describe, it, expect } from 'vitest';
import Room from '../Room';
import { renderWithProviders } from '../../../utils/test-utils';
import { setupStore } from '../../../lib/redux/store';
import { initialState } from '../../../lib/redux/gameStatsSlice';
import { Room as TRoom } from '../../../lib/types/gameStats';

describe('Room Component', () => {
  const room: TRoom = {
    id: 'test-room-id',
    name: 'test-room-name',
    owner: 'test-room-owner',
    type: 'cpu',
  };

  const store = setupStore({
    gameStats: {
      ...initialState,
      room,
    },
  });

  it('should render the component', () => {
    const { getByText } = renderWithProviders(<Room room={room} />, { store });

    expect(getByText(room.name)).toBeInTheDocument();
  });
});
