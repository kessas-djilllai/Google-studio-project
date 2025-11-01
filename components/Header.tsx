
import React from 'react';
import { DiamondIcon } from './DiamondIcon';

export const Header: React.FC = () => {
  return (
    <header className="text-center">
      <div className="flex justify-center items-center gap-4">
        <DiamondIcon className="w-12 h-12 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.7)]" />
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-500">
          حاسبة جواهر فري فاير
        </h1>
      </div>
      <p className="mt-2 text-sm text-gray-400">
        احسب تكلفة الشحن والبونص بسهولة ودقة
      </p>
    </header>
  );
};
