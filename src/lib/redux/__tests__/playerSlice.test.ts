import { describe, it, expect, beforeEach } from 'vitest';
import {
  setSessionId,
  setTurnState,
  loginPlayer,
  resetPlayer,
  initialState,
} from '../playerSlice';
import { AppStore, setupStore } from '../store';
import { GameStatus } from '../../types/gameStats';

describe('playerSlice Reducer', () => {
  let store: AppStore;

  beforeEach(() => {
    store = setupStore();
  });

  it('should set the session ID and mark the player as connected', () => {
    const sessionId = 'session123';
    store.dispatch(setSessionId(sessionId));
    const state = store.getState().player;

    expect(state.sessionId).toBe(sessionId);
    expect(state.isConnected).toBe(true);
  });

  it('should set the turn state', () => {
    const turnState = GameStatus.PLAY;
    store.dispatch(setTurnState(turnState));
    const state = store.getState().player;

    expect(state.turnState).toBe(turnState);
  });

  it('should set the username and mark the player as logged in', () => {
    const userName = 'player123';
    store.dispatch(loginPlayer(userName));
    const state = store.getState().player;

    expect(state.userName).toBe(userName);
    expect(state.isLoggedin).toBe(true);
  });

  it('should reset the player state to initial', () => {
    store.dispatch(setSessionId('session123'));
    const state = store.getState().player;

    expect(state.sessionId).not.toBe('');

    store.dispatch(resetPlayer());
    const resetState = store.getState().player;

    expect(resetState).toEqual(initialState);
  });
});
