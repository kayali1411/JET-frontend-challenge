import React from 'react';
import { useAppDispatch, useAppSelector } from '../../lib/redux';
import { clearError } from '../../lib/redux/errorSlice';

const ErrorState = () => {
  const message = useAppSelector((state) => state.error.errorMessage);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(clearError());
  };

  if (!message) {
    return <React.Fragment />;
  }

  // TODO use remove icon, better UX
  return (
    <div className="fixed flex justify-center top-24 left-0 z-20 right-0">
      <div
        data-testid="error-state-block"
        onClick={handleClick}
        className="bg-red-500 text-white p-4 w-1/2 rounded-lg drop-shadow-md cursor-pointer"
      >
        <span data-testid="error-state">
          Error: {message}, click to remove it
        </span>
      </div>
    </div>
  );
};

export default ErrorState;
