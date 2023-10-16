import React from 'react';
import { useAppSelector } from '../../lib/redux';
import { GameStatus } from '../../lib/types/gameStats';
import Action from './Action';
// TODO add relative path import

const GameControl = () => {
  const isStarted = useAppSelector((state) => state.gameStats.isStarted);
  const turnState = useAppSelector((state) => state.player.turnState);
  const isGameOver = useAppSelector((state) => state.gameStats.isOver);

  const actions = [-1, 0, 1];

  if (!isStarted || isGameOver) {
    return <React.Fragment />;
  }

  return (
    <div className="flex space-x-8 justify-center py-8">
      {turnState === GameStatus.WAIT ? (
        <span className="text-info text-2xl">Thinking... 🤔</span>
      ) : (
        <React.Fragment>
          {actions.map((action) => (
            <Action key={action} action={action} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default GameControl;
