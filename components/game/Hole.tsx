import React from 'react';

export const Hole: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-10 h-10 bg-gradient-to-br from-gray-900 to-black rounded-full shadow-inner border-2 border-gray-700">
        <div className="w-full h-full rounded-full bg-gradient-to-br from-transparent to-black/50"></div>
      </div>
    </div>
  );
};
