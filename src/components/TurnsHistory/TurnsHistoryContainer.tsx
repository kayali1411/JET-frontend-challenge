import { useAppSelector } from '../../lib/redux';
import TurnsList from './TurnsList';

const TurnsHistoryContainer = () => {
  const turns = useAppSelector((state) => state.gameStats.turnsHistory);

  return <TurnsList turns={turns} />;
};

export default TurnsHistoryContainer;
