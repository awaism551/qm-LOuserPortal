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
    <div data-layer="Frame 2131336596" className={`Frame2131336596 w-full left-[0px] px-14 top-[494px] absolute inline-flex flex-col justify-start items-start gap-14 ${className}`}>
      <div data-layer="Frame 2131336595" className="Frame2131336595 self-stretch inline-flex justify-between items-end">
        <DecorativeLines />
        <HeroTitle />
      </div>
      <div data-layer="Frame 2131336594" className="Frame2131336594 self-stretch inline-flex justify-between items-center">
        <HeroDescription />
        <CTASection />
      </div>
    </div>
  );
};

export default HeroContent;
