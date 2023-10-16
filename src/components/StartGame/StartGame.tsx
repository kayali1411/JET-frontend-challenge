import React from 'react';
import gameAPI from '../../lib/game-api';
import { useAppSelector } from '../../lib/redux';

const StartGame = () => {
  const isGameReady = useAppSelector((state) => state.gameStats.isReady);
  const userName = useAppSelector((state) => state.player.userName);
  const isStarted = useAppSelector((state) => state.gameStats.isStarted);
  const selectedRoom = useAppSelector((state) => state.gameStats.room);

  const handleClick = () => {
    gameAPI.letsPlay();
  };

  if (isStarted) {
    return <React.Fragment />;
  }

  return (
    <div>
      <h1 className="text-info font-bold text-3xl">Hello {userName}! 👋</h1>
      <div className="py-4">
        {!selectedRoom ? (
          <span className="text-info text-lg">
            Please select a room to join then start the game.
          </span>
        ) : (
          <span className="text-info text-lg">
            {isGameReady
              ? 'Now click the button below to start the game.'
              : 'Waiting for the second player to join the room.'}
          </span>
        )}
      </div>
      <button
        className="bg-primray p-2 text-white rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        type="button"
        onClick={handleClick}
        disabled={!isGameReady}
      >
        Start Game
      </button>
    </div>
  );
};

export default StartGame;
