
import React from 'react';

interface CalculatorInputProps {
  label: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min: number;
  max: number;
  step: number;
  unit: React.ReactNode;
}

export const CalculatorInput: React.FC<CalculatorInputProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  unit,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
      <div className="flex items-center gap-4 p-3 bg-gray-900 rounded-lg border border-gray-700">
        <span className="text-lg font-bold text-yellow-400">{value}</span>
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={onChange}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
        />
        <span className="text-lg font-bold text-gray-400">{unit}</span>
      </div>
    </div>
  );
};
