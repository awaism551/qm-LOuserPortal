import React from 'react';
import CTAButton from '@/components/ui/CTAButton';

interface CTASectionProps {
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ className = "" }) => {
  return (
    <div data-layer="CTA" className={`Cta flex justify-center items-center w-full lg:w-auto ${className}`}>
      <CTAButton />
    </div>
  );
};

export default CTASection;
