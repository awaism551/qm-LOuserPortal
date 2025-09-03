import React from 'react';

interface HeroDescriptionProps {
  description?: string;
  className?: string;
}

const HeroDescription: React.FC<HeroDescriptionProps> = ({ 
  description = "For visionaries and cultural leaders: gain exclusive experiences, insider insights, and a network to connect, influence, and make your mark in Qatar&apos;s cultural scene.",
  className = "" 
}) => {
  return (
    <div data-layer="Lorem ipsum dolor si" className={`LoremIpsumDolorSi w-[480px] opacity-80 justify-start text-Typography-White text-base font-normal font-['GT_America'] leading-tight ${className}`}>
      {description}
    </div>
  );
};

export default HeroDescription;
