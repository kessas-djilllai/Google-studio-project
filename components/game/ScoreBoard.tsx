import React from 'react';

interface ScoreBoardProps {
  score: number;
  highScore: number;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ score, highScore }) => {
  return (
    <div className="flex justify-between items-center mb-6 px-4">
      <div className="bg-blue-600/30 backdrop-blur-sm px-6 py-3 rounded-lg border border-blue-400/50">
        <div className="text-sm text-blue-200">Score</div>
        <div className="text-2xl font-bold text-white">{score}</div>
      </div>
      <div className="bg-purple-600/30 backdrop-blur-sm px-6 py-3 rounded-lg border border-purple-400/50">
        <div className="text-sm text-purple-200">High Score</div>
        <div className="text-2xl font-bold text-white">{highScore}</div>
      </div>
    </div>
  );
};
