import React from 'react';

export const Player: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full shadow-lg border-2 border-blue-300 animate-pulse"></div>
    </div>
  );
};
