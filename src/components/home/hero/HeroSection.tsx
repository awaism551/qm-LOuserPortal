import React from 'react';
import TopNavigation from '@/components/layout/TopNavigation';
import HeroContent from '@/components/home/hero/HeroContent';

interface HeroSectionProps {
  className?: string;
  id?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  className = "",
  id = "header-hero-section"
}) => {
  return (
    <div
      data-layer="Hero Section"
      id={id}
      className={`HeroSection relative w-full min-h-[900px] overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 12.38%, rgba(0, 0, 0, 0.80) 75.15%)'
      }}
    >
      {/* Background image will be applied via CSS in globals.css for #header-hero-section */}
      <div className="relative z-10 flex flex-col h-full min-h-[900px]">
        <TopNavigation />
        <HeroContent />
      </div>
    </div>
  );
};

export default HeroSection;
