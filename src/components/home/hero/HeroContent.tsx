import React from 'react';
import DecorativeLines from '@/components/home/hero/DecorativeLines';
import HeroTitle from '@/components/home/hero/HeroTitle';
import HeroDescription from '@/components/home/hero/HeroDescription';
import CTASection from '@/components/home/hero/CTASection';

interface HeroContentProps {
  className?: string;
}

const HeroContent: React.FC<HeroContentProps> = ({ className = "" }) => {
  return (
    <div
      data-layer="Frame 2131336596"
      className={`Frame2131336596 flex-1 flex flex-col justify-end w-full px-4 md:px-8 lg:px-14 pb-16 md:pb-20 lg:pb-24 ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-14">
        <div data-layer="Frame 2131336595" className="Frame2131336595 flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-4">
          <div className="flex justify-start lg:order-1">
            <DecorativeLines />
          </div>
          <div className="flex-1 lg:order-2">
            <HeroTitle />
          </div>
        </div>
        <div data-layer="Frame 2131336594" className="Frame2131336594 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 lg:gap-8">
          <div className="flex-1 lg:max-w-md">
            <HeroDescription />
          </div>
          <div className="flex justify-start lg:justify-end">
            <CTASection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
