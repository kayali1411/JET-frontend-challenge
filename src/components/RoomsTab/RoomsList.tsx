import type { Room as TRoom } from '../../lib/types/gameStats';
import Room from './Room';

interface IProps {
  rooms: TRoom[];
  isLoading: boolean;
  isError: boolean;
}

const RoomsList: React.FC<IProps> = ({ rooms, isLoading, isError }) => {
  // TODO - implement loading and error states
  console.log({ isLoading, isError });

  return (
    <div>
      <h3 className="text-info font-bold py-4">Choose a game room</h3>
      <ul className="w-64">
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </ul>
    </div>
  );
};

export default RoomsList;
