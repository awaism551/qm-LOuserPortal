import React from 'react';
import CTAButton from '@/components/ui/CTAButton';

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className = "" }) => {
  return (
    <div data-layer="CTA" className={`Cta size- flex justify-start items-center gap-5 bg-white/20 ${className}`}>
      <CTAButton />
    </div>
  );
};

export default CTASection;
