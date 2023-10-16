import React from 'react';
import { useAppSelector } from '../../lib/redux';
import { ReactComponent as Win } from '../../assets/win.svg';
import { ReactComponent as Lose } from '../../assets/lose.svg';
import gameAPI from '../../lib/game-api';

const GameResult = () => {
  const isGameOver = useAppSelector((state) => state.gameStats.isOver);
  const winner = useAppSelector((state) => state.gameStats.winner);
  const userName = useAppSelector((state) => state.player.userName);

  const handleClick = () => {
    gameAPI.leaveRoom();
  };

  if (!isGameOver) {
    return <React.Fragment />;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10 bg-black bg-opacity-50">
      <div className="relative -top-20 flex flex-col items-center">
        {winner === userName ? (
          <React.Fragment>
            <Win />
            <h1 className="text-4xl font-bold text-center text-white py-8">
              You won
            </h1>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Lose />
            <h1 className="text-4xl font-bold text-center text-white py-8">
              You lose
            </h1>
          </React.Fragment>
        )}
        <button
          onClick={handleClick}
          type="button"
          className="bg-white text-blue rounded-full w-52 p-4 font-bold"
        >
          New game
        </button>
      </div>
    </div>
  );
};

export default GameResult;
