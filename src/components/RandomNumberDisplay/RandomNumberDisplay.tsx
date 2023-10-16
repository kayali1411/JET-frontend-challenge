import React from 'react';
import { useAppSelector } from '../../lib/redux';

const RandomNumberDisplay = () => {
  const isStarted = useAppSelector((state) => state.gameStats.isStarted);
  const initialNumber = useAppSelector(
    (state) => state.gameStats.initialNumber,
  );

  if (!isStarted) {
    return <React.Fragment />;
  }

  return (
    <div>
      <h1 className="text-info font-bold text-3xl">
        The started number is {initialNumber}
      </h1>
    </div>
  );
};

export default RandomNumberDisplay;
