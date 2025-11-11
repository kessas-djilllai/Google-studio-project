export interface Position {
  x: number;
  y: number;
}

export interface Hole {
  id: string;
  position: Position;
}

export type GameState = 'idle' | 'playing' | 'gameOver';

export type Direction = 'up' | 'down' | 'left' | 'right';
