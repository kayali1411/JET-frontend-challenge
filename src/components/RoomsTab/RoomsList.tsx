import { useAppDispatch } from '../../lib/redux';
import { setError } from '../../lib/redux/errorSlice';
import type { Room as TRoom } from '../../lib/types/gameStats';
import Room from './Room';

interface IProps {
  rooms: TRoom[];
  isLoading: boolean;
  isError: boolean;
}

const RoomsList: React.FC<IProps> = ({ rooms, isLoading, isError }) => {
  const dispatch = useAppDispatch();

  if (isError) {
    dispatch(
      setError(
        'Something went wrong while loading available rooms, please try again later.',
      ),
    );
  }

  if (isLoading) {
    return (
      <div className="animate-pulse flex flex-col w-64 h-64 py-4">
        <div className="w-full h-24 mb-1 bg-zinc-300" />
        <div className="w-full h-24 mb-1 border-white bg-zinc-300" />
        <div className="w-full h-24 bg-zinc-300" />
      </div>
    );
  }

  return (
    <div className="w-64 drop-shadow-sm">
      <h3 className="text-info font-bold py-4">Choose a game room</h3>
      <ul>
        {rooms.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </ul>
    </div>
  );
};

export default RoomsList;
