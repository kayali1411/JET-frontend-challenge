export enum GameStatus {
  WAIT = 'wait',
  PLAY = 'play',
}

export type Player = {
  userName: string;
  isLoggedin: boolean;
  isConnected: boolean;
};

export type Room = {
  id: string;
  name: string;
  owner: string;
  type: string;
};

export type Turn = {
  selectedNumber: number;
  isFirst: boolean;
  result: number;
  player: string;
};
