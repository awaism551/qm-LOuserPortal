import React from 'react';

interface DecorativeLinesProps {
  className?: string;
}

const DecorativeLines: React.FC<DecorativeLinesProps> = ({ className = "" }) => {
  return (
    <div data-layer="Frame 2131336114" className={`Frame2131336114 w-1 origin-top-left rotate-180 inline-flex flex-col justify-center items-center gap-2.5 ${className}`}>
      <div data-layer="Line 1396 (Stroke)" className="Line1396Stroke w-10 h-1 origin-top-left rotate-90 bg-Stroke-White-20%/20" />
      <div data-layer="Line 1397 (Stroke)" className="Line1397Stroke w-10 h-1 origin-top-left rotate-90 bg-Iconography-White" />
      <div data-layer="Line 1398 (Stroke)" className="Line1398Stroke w-10 h-1 origin-top-left rotate-90 bg-Stroke-White-20%/20" />
    </div>
  );
};

export default DecorativeLines;
