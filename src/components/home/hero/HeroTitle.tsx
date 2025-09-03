import React from 'react';

interface HeroTitleProps {
  title?: string;
  className?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ 
  title = "Discover Exclusive Cultural Experiences & Opportunities",
  className = "" 
}) => {
  return (
    <div data-layer="Frame 2131336885" className={`Frame2131336885 w-[648px] inline-flex flex-col justify-end items-start gap-12 ${className}`}>
      <div data-layer="About ALN" className="AboutAln self-stretch text-right justify-start text-Typography-White text-7xl font-light font-['Lyon_Arabic_Display'] capitalize leading-[88px]">
        {title}
      </div>
    </div>
  );
};

export default HeroTitle;
