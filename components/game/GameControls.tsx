import React from 'react';
import { GameState } from '../../types/game';

interface GameControlsProps {
  gameState: GameState;
  onStart: () => void;
  onRestart: () => void;
}

export const GameControls: React.FC<GameControlsProps> = ({ gameState, onStart, onRestart }) => {
  if (gameState === 'playing') {
    return (
      <div className="mt-6 text-center">
        <div className="text-sm text-gray-400 mb-2">Use Arrow Keys or WASD to move</div>
        <div className="flex justify-center gap-2 text-xs text-gray-500">
          <span className="bg-gray-700/50 px-2 py-1 rounded">↑ W</span>
          <span className="bg-gray-700/50 px-2 py-1 rounded">← A</span>
          <span className="bg-gray-700/50 px-2 py-1 rounded">↓ S</span>
          <span className="bg-gray-700/50 px-2 py-1 rounded">→ D</span>
        </div>
      </div>
    );
  }

  if (gameState === 'gameOver') {
    return (
      <div className="mt-6 text-center">
        <div className="text-2xl font-bold text-red-400 mb-4">Game Over!</div>
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition hover:scale-105"
        >
          Play Again
        </button>
      </div>
    );
  }

  return (
    <div className="mt-6 text-center">
      <div className="mb-4 text-gray-300">
        <h2 className="text-xl font-bold mb-2">How to Play</h2>
        <p className="text-sm">Navigate the grid and avoid falling into holes!</p>
        <p className="text-sm">The longer you survive, the higher your score.</p>
      </div>
      <button
        onClick={onStart}
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition hover:scale-105"
      >
        Start Game
      </button>
    </div>
  );
};
