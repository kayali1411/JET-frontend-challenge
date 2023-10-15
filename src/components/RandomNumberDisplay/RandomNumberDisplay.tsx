import React, { useMemo } from 'react';
import { useAppSelector } from '../../lib/redux';

const RandomNumberDisplay = () => {
  const isStarted = useAppSelector((state) => state.gameStats.isStarted);
  const turnsHistory = useAppSelector((state) => state.gameStats.turnsHistory);

  const startNumber = useMemo(() => {
    if (turnsHistory.length === 0) {
      return 0;
    }

    return turnsHistory[0].result;
  }, []);

  if (!isStarted) {
    return <React.Fragment />;
  }

  return (
    <div>
      <h1 className="text-info font-bold text-3xl">
        The start number is {startNumber}
      </h1>
    </div>
  );
};

export default RandomNumberDisplay;
