import type { Room as TRoom } from '../../lib/types/gameStats';
import { ReactComponent as ArrowRight } from '../../assets/arrow-right.svg';
import gameAPI from '../../lib/game-api';
import { useAppSelector } from '../../lib/redux';

interface IProps {
  room: TRoom;
}

const Room: React.FC<IProps> = ({ room }) => {
  const userName = useAppSelector((state) => state.player.userName);
  const selectedRoom = useAppSelector((state) => state.gameStats.room);

  const handleClick = () => {
    gameAPI.joinRoom(room, userName);
  };

  const isSelected = selectedRoom?.id === room.id;

  return (
    <li
      onClick={handleClick}
      className={`p-4 flex items-center justify-between cursor-pointer border-b border-zinc-200 last:border-b-0 ${
        isSelected ? 'bg-blue' : 'bg-white'
      }`}
    >
      <span className={`${isSelected ? 'text-white' : 'text-info'}`}>
        {room.name}
      </span>
      <ArrowRight className={isSelected ? 'fill-white' : 'fill-blue'} />
    </li>
  );
};

export default Room;
