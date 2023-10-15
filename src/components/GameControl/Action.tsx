import React from 'react';
import gameAPI from '../../lib/game-api';
import { useAppSelector } from '../../lib/redux';
interface IProps {
  action: number;
}

const Action: React.FC<IProps> = ({ action }) => {
  const currentNumber = useAppSelector(
    (state) => state.gameStats.currentNumber,
  );

  const handleClick = () => {
    gameAPI.sendNumber(currentNumber, action);
  };

  return (
    <button
      type="button"
      key={action.toString()}
      onClick={handleClick}
      className="bg-white text-blue text-lg font-bold p-4 drop-shadow-md rounded-full w-16 h-16"
    >
      {action > 0 ? `+${action}` : action}
    </button>
  );
};

export default Action;
