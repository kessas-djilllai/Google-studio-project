
import React from 'react';

interface IconProps {
  className?: string;
}

export const DiamondIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M12 2l4.243 4.243-1.414 1.414L12 4.828 9.172 7.657 7.757 6.243 12 2zM3.808 9.172l3.85-3.849 1.414 1.414-3.849 3.85-1.414-1.414zM12 22l-4.243-4.243 1.414-1.414L12 19.172l2.828-2.829 1.414 1.414L12 22zm8.485-11.414l-3.849 3.85-1.414-1.414 3.85-3.849 1.414 1.414zM4.5 12.5l7.5 7.5 7.5-7.5-7.5-7.5-7.5 7.5z" />
    </svg>
  );
};
