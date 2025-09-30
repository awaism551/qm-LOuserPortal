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
    >
      {/* Background image is applied via CSS in globals.css for #header-hero-section */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/0 via-black/30 to-black/80" />
      <div className="relative z-10 flex flex-col h-full min-h-[900px]">
        <TopNavigation />
        <HeroContent />
      </div>
    </div>
  );
};

export default HeroSection;
