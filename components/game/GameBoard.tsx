import React from 'react';
import { Position, Hole as HoleType } from '../../types/game';
import { Player } from './Player';
import { Hole } from './Hole';

interface GameBoardProps {
  gridSize: number;
  playerPosition: Position;
  holes: HoleType[];
}

export const GameBoard: React.FC<GameBoardProps> = ({ gridSize, playerPosition, holes }) => {
  const renderCell = (x: number, y: number) => {
    const isPlayer = playerPosition.x === x && playerPosition.y === y;
    const hole = holes.find(h => h.position.x === x && h.position.y === y);

    return (
      <div
        key={`${x}-${y}`}
        className={`
          aspect-square border border-gray-700/50 
          ${isPlayer ? 'bg-blue-900/30' : hole ? 'bg-red-900/20' : 'bg-gray-800/30'}
          transition-colors duration-200
        `}
      >
        {isPlayer && <Player />}
        {hole && <Hole />}
      </div>
    );
  };

  const cells = [];
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      cells.push(renderCell(x, y));
    }
  }

  return (
    <div
      className="grid gap-1 bg-gray-900/50 p-4 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-700/50"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
      }}
    >
      {cells}
    </div>
  );
};
