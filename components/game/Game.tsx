import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Position, Hole, GameState, Direction } from '../../types/game';
import { GameBoard } from './GameBoard';
import { ScoreBoard } from './ScoreBoard';
import { GameControls } from './GameControls';

const GRID_SIZE = 10;
const INITIAL_POSITION: Position = { x: 5, y: 5 };
const HOLE_SPAWN_INTERVAL = 2000;
const SCORE_INCREMENT = 10;

export const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('idle');
  const [playerPosition, setPlayerPosition] = useState<Position>(INITIAL_POSITION);
  const [holes, setHoles] = useState<Hole[]>([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('gameOfHole_highScore');
    return saved ? parseInt(saved, 10) : 0;
  });

  const holeSpawnTimerRef = useRef<NodeJS.Timeout | null>(null);
  const scoreTimerRef = useRef<NodeJS.Timeout | null>(null);

  const spawnHole = useCallback(() => {
    const newHole: Hole = {
      id: `hole-${Date.now()}-${Math.random()}`,
      position: {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      },
    };

    setHoles(prev => {
      if (prev.some(h => h.position.x === newHole.position.x && h.position.y === newHole.position.y)) {
        return prev;
      }
      return [...prev, newHole];
    });
  }, []);

  const checkCollision = useCallback((position: Position) => {
    return holes.some(hole => hole.position.x === position.x && hole.position.y === position.y);
  }, [holes]);

  const movePlayer = useCallback((direction: Direction) => {
    if (gameState !== 'playing') return;

    setPlayerPosition(prev => {
      let newPosition = { ...prev };

      switch (direction) {
        case 'up':
          newPosition.y = Math.max(0, prev.y - 1);
          break;
        case 'down':
          newPosition.y = Math.min(GRID_SIZE - 1, prev.y + 1);
          break;
        case 'left':
          newPosition.x = Math.max(0, prev.x - 1);
          break;
        case 'right':
          newPosition.x = Math.min(GRID_SIZE - 1, prev.x + 1);
          break;
      }

      if (checkCollision(newPosition)) {
        setGameState('gameOver');
        return prev;
      }

      setScore(s => s + SCORE_INCREMENT);
      return newPosition;
    });
  }, [gameState, checkCollision]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (gameState !== 'playing') return;

    switch (event.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        event.preventDefault();
        movePlayer('up');
        break;
      case 'ArrowDown':
      case 's':
      case 'S':
        event.preventDefault();
        movePlayer('down');
        break;
      case 'ArrowLeft':
      case 'a':
      case 'A':
        event.preventDefault();
        movePlayer('left');
        break;
      case 'ArrowRight':
      case 'd':
      case 'D':
        event.preventDefault();
        movePlayer('right');
        break;
    }
  }, [gameState, movePlayer]);

  const startGame = () => {
    setGameState('playing');
    setPlayerPosition(INITIAL_POSITION);
    setHoles([]);
    setScore(0);
  };

  const restartGame = () => {
    startGame();
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (gameState === 'playing') {
      holeSpawnTimerRef.current = setInterval(spawnHole, HOLE_SPAWN_INTERVAL);
      scoreTimerRef.current = setInterval(() => {
        setScore(s => s + 1);
      }, 1000);

      return () => {
        if (holeSpawnTimerRef.current) clearInterval(holeSpawnTimerRef.current);
        if (scoreTimerRef.current) clearInterval(scoreTimerRef.current);
      };
    }
  }, [gameState, spawnHole]);

  useEffect(() => {
    if (gameState === 'gameOver' && score > highScore) {
      setHighScore(score);
      localStorage.setItem('gameOfHole_highScore', score.toString());
    }
  }, [gameState, score, highScore]);

  useEffect(() => {
    if (gameState === 'playing' && checkCollision(playerPosition)) {
      setGameState('gameOver');
    }
  }, [gameState, playerPosition, checkCollision]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-2">
            Game of Hole
          </h1>
          <p className="text-gray-400">Survive as long as you can!</p>
        </div>

        <ScoreBoard score={score} highScore={highScore} />

        <div className="flex justify-center mb-6">
          <GameBoard
            gridSize={GRID_SIZE}
            playerPosition={playerPosition}
            holes={holes}
          />
        </div>

        <GameControls
          gameState={gameState}
          onStart={startGame}
          onRestart={restartGame}
        />
      </div>
    </div>
  );
};
