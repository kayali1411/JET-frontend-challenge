import { describe, it, expect } from 'vitest';
import { fireEvent } from '@testing-library/react';
import ErrorState from '../ErrorState';
import { renderWithProviders } from '../../../utils/test-utils';
import { setupStore } from '../../../lib/redux/store';
import { setError } from '../../../lib/redux/errorSlice';

describe('ErrorState Component', () => {
  describe('when errorMessage is not empty', () => {
    it('should not render when errorMessage', () => {
      const { container } = renderWithProviders(<ErrorState />, {
        preloadedState: {
          error: { errorMessage: '' },
        },
      });

      expect(container.firstChild).toBeNull();
    });
  });

  describe('when errorMessage is not empty', () => {
    const errorMessage = 'Test Error Message';

    it('should initial render with an error message', () => {
      const { getByTestId } = renderWithProviders(<ErrorState />, {
        preloadedState: {
          error: { errorMessage },
        },
      });

      expect(getByTestId('error-state')).toBeInTheDocument();
    });

    it('should re-render with an error message when setError dispatched', async () => {
      const store = setupStore();

      const { getByTestId } = renderWithProviders(<ErrorState />, { store });
      await store.dispatch(setError(errorMessage));

      expect(getByTestId('error-state')).toBeInTheDocument();
    });
  });

  describe('when errorMessage block is clicked', () => {
    const errorMessage = 'Test Error Message';

    const store = setupStore({ error: { errorMessage } });
    it('should clear error message', async () => {
      const { getByTestId, container } = renderWithProviders(<ErrorState />, {
        store,
      });
      await fireEvent.click(getByTestId('error-state-block'));

      expect(container.firstChild).toBeNull();
    });
  });
});
