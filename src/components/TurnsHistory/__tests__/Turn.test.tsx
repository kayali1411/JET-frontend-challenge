import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import type { Turn as TTurn } from '../../../lib/types/gameStats';
import Turn from '../Turn';

describe('Turn Component', () => {
  it('should render correctly', () => {
    const turn: TTurn = {
      selectedNumber: -1,
      isFirst: false,
      result: 851,
      player: 'current-player',
    };

    const { getByText } = render(
      <Turn turn={turn} isMe={true} prevTotal={1381} />,
    );

    const resultEle = getByText(turn.result.toString());
    const actionEle = getByText(
      `[ ( ${turn.selectedNumber} + 1381 ) / 3 ] = ${turn.result}`,
    );
    const selectedNumberEle = getByText('-1');

    expect(resultEle).toBeInTheDocument();
    expect(actionEle).toBeInTheDocument();
    expect(selectedNumberEle).toBeInTheDocument();
  });

  it('should render for current player turn', () => {
    const turn: TTurn = {
      selectedNumber: 1,
      isFirst: false,
      result: 851,
      player: 'current-player',
    };

    const { getByText, getByTestId } = render(
      <Turn turn={turn} isMe={true} prevTotal={1381} />,
    );

    const selectedNumberEle = getByText('+1');
    const currentPlayerAvatar = getByTestId('current-player-avatar');

    expect(currentPlayerAvatar).toBeInTheDocument();
    expect(selectedNumberEle).toBeInTheDocument();
    expect(selectedNumberEle).toHaveClass('bg-info');
  });

  it('should render for opponent player turn', () => {
    const turn: TTurn = {
      selectedNumber: 0,
      isFirst: false,
      result: 123,
      player: 'opponent-player',
    };

    const { getByText, getByTestId } = render(
      <Turn turn={turn} isMe={false} prevTotal={331} />,
    );

    const selectedNumberEle = getByText('0');
    const currentPlayerAvatar = getByTestId('opponent-player-avatar');

    expect(currentPlayerAvatar).toBeInTheDocument();
    expect(selectedNumberEle).toBeInTheDocument();
    expect(selectedNumberEle).toHaveClass('bg-blue');
  });
});
