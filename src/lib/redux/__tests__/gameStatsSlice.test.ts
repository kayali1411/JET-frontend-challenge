import { describe, it, expect, beforeEach } from 'vitest';
import {
  setWinner,
  setGameIsOver,
  setInitialNumber,
  addTurn,
  setGameState,
  setGameRoom,
  setGameStarted,
  resetGame,
  initialState,
} from '../gameStatsSlice';
import { AppStore, setupStore } from '../store';
import { Room, Turn } from '../../types/gameStats';

describe('gameStatsSlice Reducer', () => {
  let store: AppStore;

  beforeEach(() => {
    store = setupStore();
  });

  it('should set the winner and mark the game as over', () => {
    const winner = 'player123';
    store.dispatch(setWinner(winner));
    const state = store.getState().gameStats;

    expect(state.winner).toBe(winner);
    expect(state.isOver).toBe(true);
  });

  it('should mark the game as over and not started', () => {
    store.dispatch(setGameIsOver());
    const state = store.getState().gameStats;

    expect(state.isOver).toBe(true);
    expect(state.isStarted).toBe(false);
  });

  it('should set the initial number and update the current number', () => {
    const initialNumber = 42;
    store.dispatch(setInitialNumber(initialNumber));
    const state = store.getState().gameStats;

    expect(state.initialNumber).toBe(initialNumber);
    expect(state.currentNumber).toBe(initialNumber);
  });

  it('should add a turn to the turnsHistory and update the current number', () => {
    const turn: Turn = {
      selectedNumber: 2,
      isFirst: false,
      result: 40,
      player: 'player123',
    };
    store.dispatch(addTurn(turn));
    const state = store.getState().gameStats;

    expect(state.turnsHistory).toContainEqual(turn);
    expect(state.currentNumber).toBe(turn.result);
  });

  it('should set the game state to ready', () => {
    store.dispatch(setGameState(true));
    const state = store.getState().gameStats;

    expect(state.isReady).toBe(true);
  });

  it('should set the game room', () => {
    const room: Room = {
      id: 'room123',
      name: 'Room 123',
      owner: 'player123',
      type: 'public',
    };
    store.dispatch(setGameRoom(room));
    const state = store.getState().gameStats;

    expect(state.room).toBe(room);
  });

  it('should mark the game as started', () => {
    store.dispatch(setGameStarted());
    const state = store.getState().gameStats;

    expect(state.isStarted).toBe(true);
  });

  it('should reset the game state to initial', () => {
    // Set initial state to something different to test the reset
    store.dispatch(setWinner('player123'));
    store.dispatch(setGameIsOver());
    const state = store.getState().gameStats;

    expect(state.winner).not.toBe('');
    expect(state.isOver).toBe(true);

    store.dispatch(resetGame());
    const resetState = store.getState().gameStats;

    expect(resetState).toEqual(initialState);
  });
});
