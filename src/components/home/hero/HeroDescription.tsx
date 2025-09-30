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
    <p
      data-layer="Lorem ipsum dolor si"
      className={`LoremIpsumDolorSi w-full max-w-lg opacity-80 text-Typography-White text-sm md:text-base lg:text-lg font-normal font-['GT_America'] leading-relaxed ${className}`}
    >
      {description}
    </p>
  );
};

export default HeroDescription;
