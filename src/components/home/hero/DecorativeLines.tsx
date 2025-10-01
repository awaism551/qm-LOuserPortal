import React from 'react';

interface DecorativeLinesProps {
  className?: string;
}

const DecorativeLines: React.FC<DecorativeLinesProps> = ({ className = "" }) => {
  return (
    <div className={`hidden lg:flex flex-col justify-center items-center ${className}`}>
      <svg
        width="4"
        height="140"
        viewBox="0 0 4 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex flex-col justify-center items-center"
      >
        <path d="M-1.74846e-06 100L4 100L4 140L0 140L-1.74846e-06 100Z" fill="white" fillOpacity="0.2"/>
        <path d="M-1.74846e-06 50L4 50L4 90L0 90L-1.74846e-06 50Z" fill="white"/>
        <path d="M-1.74846e-06 0L4 -1.74846e-07L4 40L0 40L-1.74846e-06 0Z" fill="white" fillOpacity="0.2"/>
      </svg>
    </div>
  );
};

export default DecorativeLines;
