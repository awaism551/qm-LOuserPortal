import React from 'react';

interface DecorativeLinesProps {
  className?: string;
}

const DecorativeLines: React.FC<DecorativeLinesProps> = ({ className = "" }) => {
  return (
    <div data-layer="Frame 2131336114" className={`Frame2131336114 hidden lg:flex flex-col justify-center items-center gap-2 ${className}`}>
      <div data-layer="Line 1396 (Stroke)" className="Line1396Stroke w-8 h-0.5 bg-white/20" />
      <div data-layer="Line 1397 (Stroke)" className="Line1397Stroke w-8 h-0.5 bg-white" />
      <div data-layer="Line 1398 (Stroke)" className="Line1398Stroke w-8 h-0.5 bg-white/20" />
    </div>
  );
};

export default DecorativeLines;
