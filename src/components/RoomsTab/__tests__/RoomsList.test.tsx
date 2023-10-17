import { describe, it, expect } from 'vitest';
import RoomsList from '../RoomsList';
import { renderWithProviders } from '../../../utils/test-utils';
import { setupStore } from '../../../lib/redux/store';
import { Room as TRoom } from '../../../lib/types/gameStats';

describe('RoomsList Component', () => {
  const rooms: TRoom[] = [
    {
      id: 'test-room-id-1',
      name: 'test-room-name-2',
      owner: 'test-room-owner-3',
      type: 'cpu',
    },
    {
      id: 'test-room-id-1',
      name: 'test-room-name-2',
      owner: 'test-room-owner-3',
      type: 'cpu',
    },
  ];

  const store = setupStore();

  describe('when loaded', () => {
    it('should render the component', () => {
      const { getAllByRole } = renderWithProviders(
        <RoomsList rooms={rooms} isLoading={false} isError={false} />,
        { store },
      );

      expect(getAllByRole('listitem').length).toBe(2);
    });
  });

  describe('when loading', () => {
    it('should render the component', () => {
      const { getByTestId } = renderWithProviders(
        <RoomsList rooms={[]} isLoading={true} isError={false} />,
        { store },
      );

      expect(getByTestId('rooms-list-loading-state')).toBeInTheDocument();
    });
  });

  describe('when error', () => {
    it('should render the component with empty list', async () => {
      const { queryByRole } = renderWithProviders(
        <RoomsList rooms={[]} isLoading={false} isError={true} />,
        { store },
      );

      expect(queryByRole('listitem')).toBeNull();
    });
  });
});
