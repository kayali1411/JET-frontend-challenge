import { useAppSelector } from '../../lib/redux';
import type { Turn as TTurn } from '../../lib/types/gameStats';
import Turn from './Turn';

interface IProps {
  turns: TTurn[];
}

const TurnsList: React.FC<IProps> = ({ turns }) => {
  const userName = useAppSelector((state) => state.player.userName);
  const initialNumber = useAppSelector(
    (state) => state.gameStats.initialNumber,
  );

  return (
    <div className="w-full py-6">
      <div className="flex flex-col">
        {turns.map((turn, index) => (
          <Turn
            key={turn.player.concat(
              turn.result.toString(),
              turn.selectedNumber.toString(),
            )}
            turn={turn}
            prevTotal={index === 0 ? initialNumber : turns[index - 1].result}
            isMe={userName === turn.player}
          />
        ))}
      </div>
    </div>
  );
};

export default TurnsList;
