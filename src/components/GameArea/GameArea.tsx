import { GameControl } from '../../components/GameControl';
import { RandomNumberDisplay } from '../../components/RandomNumberDisplay';
import { StartGame } from '../../components/StartGame';
import { TurnsHistoryContainer } from '../../components/TurnsHistory';
import { useScrollableView } from '../../hooks';
import { GameResult } from '../GameResult';

const GameArea = () => {
  const { scrollableRef } = useScrollableView();
  return (
    <div className="w-2/5 max-h-[calc(100vh-147px)] bg-white p-6 drop-shadow-sm overflow-hidden">
      <div className="overflow-auto h-full" ref={scrollableRef}>
        <StartGame />
        <RandomNumberDisplay />
        <TurnsHistoryContainer />
        <GameControl />
        <GameResult />
      </div>
    </div>
  );
};

export default GameArea;
