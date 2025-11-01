
import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { CalculatorInput } from './components/CalculatorInput';
import { ResultsDisplay } from './components/ResultsDisplay';
import { DiamondIcon } from './components/DiamondIcon';

const App: React.FC = () => {
  const [baseDiamonds, setBaseDiamonds] = useState<number>(100);
  const [bonusPercentage, setBonusPercentage] = useState<number>(10);

  // سعر تقريبي لكل 100 جوهرة بالدولار الأمريكي كمثال
  const COST_PER_100_DIAMONDS = 1;

  const handleDiamondsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setBaseDiamonds(isNaN(value) ? 0 : value);
  };

  const handleBonusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setBonusPercentage(isNaN(value) ? 0 : value);
  };

  const calculations = useMemo(() => {
    const bonusDiamonds = Math.floor(baseDiamonds * (bonusPercentage / 100));
    const totalDiamonds = baseDiamonds + bonusDiamonds;
    const estimatedCost = (baseDiamonds / 100) * COST_PER_100_DIAMONDS;
    return { bonusDiamonds, totalDiamonds, estimatedCost };
  }, [baseDiamonds, bonusPercentage]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center p-4">
      <div className="w-full max-w-md mx-auto">
        <Header />

        <main className="mt-8 p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-lg border border-yellow-500/30">
          <div className="space-y-6">
            <CalculatorInput
              label="كمية الجواهر الأساسية"
              value={baseDiamonds}
              onChange={handleDiamondsChange}
              min={100}
              max={10000}
              step={100}
              unit={<DiamondIcon className="w-5 h-5 text-yellow-400" />}
            />

            <CalculatorInput
              label="نسبة البونص الإضافي (%)"
              value={bonusPercentage}
              onChange={handleBonusChange}
              min={0}
              max={200}
              step={5}
              unit="%"
            />
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <ResultsDisplay
              totalDiamonds={calculations.totalDiamonds}
              bonusDiamonds={calculations.bonusDiamonds}
              estimatedCost={calculations.estimatedCost}
            />
          </div>
        </main>
        
        <footer className="text-center mt-8 text-xs text-gray-500">
          <p>
            تنويه: هذا التطبيق هو أداة حسابية فقط.
          </p>
          <p>
            جميع الأسعار تقريبية وقد تختلف. التطبيق غير مرتبط بـ Garena.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;
