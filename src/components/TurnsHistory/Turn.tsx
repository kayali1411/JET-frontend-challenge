import type { Turn as TTurn } from '../../lib/types/gameStats';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Person } from '../../assets/ic-person.svg';

interface IProps {
  turn: TTurn;
  prevTotal: number;
  isMe: boolean;
}

const Turn: React.FC<IProps> = ({ turn, isMe, prevTotal }) => {
  return (
    <div className={isMe ? 'self-start' : 'self-end'}>
      <div
        className={`flex items-start ${isMe ? 'flex-row' : 'flex-row-reverse'}`}
      >
        <div
          className={`rounded-full p-2 ${isMe ? 'bg-primray' : 'bg-secondary'}`}
        >
          {isMe ? <Logo /> : <Person />}
        </div>
        <div className="flex flex-col mx-4 space-y-4 w-80">
          <span
            className={`text-2xl text-center text-white rounded-full p-4 w-16 h-16 ${
              isMe ? 'bg-info self-start' : 'bg-blue self-end'
            }`}
          >
            {turn.selectedNumber > 0
              ? `+${turn.selectedNumber}`
              : turn.selectedNumber}
          </span>
          <div className="bg-gray px-4 py-2 rounded-md flex items-center">
            <span className="text-secondary">
              [ ( {turn.selectedNumber} + {prevTotal} ) / 3 ] = {turn.result}
            </span>
          </div>
          <div className="bg-gray px-4 py-2 rounded-md flex items-center">
            <span className="text-secondary">{turn.result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Turn;
