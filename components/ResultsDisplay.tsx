
import React from 'react';
import { DiamondIcon } from './DiamondIcon';

interface ResultsDisplayProps {
  totalDiamonds: number;
  bonusDiamonds: number;
  estimatedCost: number;
}

export const ResultsDisplay: React.FC<ResultsDisplayProps> = ({
  totalDiamonds,
  bonusDiamonds,
  estimatedCost,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-center text-orange-400 mb-4">النتائج النهائية</h2>
      
      <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded-lg">
        <span className="text-gray-300">الجواهر الإضافية (بونص):</span>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-400">+{bonusDiamonds.toLocaleString()}</span>
          <DiamondIcon className="w-5 h-5 text-green-400"/>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-gray-900/50 rounded-lg">
        <span className="text-gray-300">التكلفة التقديرية:</span>
        <span className="text-lg font-bold text-cyan-400">${estimatedCost.toFixed(2)}</span>
      </div>

      <div className="mt-4 p-5 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-lg text-center shadow-lg">
        <p className="text-gray-900 font-medium">ستحصل على إجمالي</p>
        <div className="flex justify-center items-center gap-3 mt-1">
          <span className="text-3xl font-bold text-white drop-shadow-md">{totalDiamonds.toLocaleString()}</span>
          <DiamondIcon className="w-8 h-8 text-white drop-shadow-md"/>
        </div>
      </div>
    </div>
  );
};
