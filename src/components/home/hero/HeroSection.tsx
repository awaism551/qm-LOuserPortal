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
    <div data-layer="Hero Section" id={id} className={`HeroSection self-stretch h-[900px] relative bg-Background-White overflow-hidden ${className}`}>
      <div data-layer="Qatar Headef Video 1" className="QatarHeadefVideo1 h-[900px] left-0 top-0 absolute bg-gradient-to-b from-black/0 from 16% to-black/80" />
      <TopNavigation />
      <HeroContent />
    </div>
  );
};

export default HeroSection;
