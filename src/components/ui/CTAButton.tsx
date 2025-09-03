import React from 'react';
import Image from 'next/image';

interface CTAButtonProps {
  text?: string;
  arrowSrc?: string;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text = "Apply for Membership",
  arrowSrc = "/images/arrow-right.png",
  className = "" 
}) => {
  return (
    <div data-layer="Component 5" data-icon-placeholder="true" data-size="lg" data-state="Default 1" data-type="Tertiary" className={`Component5 size- outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 flex justify-start items-center ${className}`}>
      <div data-layer="Button" className="Button h-12 px-5 py-3 bg-Button-Background-Blur-20%/20 backdrop-blur-xl flex justify-center items-center gap-2.5 overflow-hidden">
        <div data-layer="text" className="Text text-center justify-start text-Text-text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
          {text}
        </div>
      </div>
      <div data-layer="Button/Default" className="ButtonDefault size-12 px-3.5 py-3 bg-Button-Background-Blur-20%/20 border-l border-Stroke-White-56%/60 backdrop-blur-xl flex justify-center items-center gap-2.5 overflow-hidden">
        <Image 
          src={arrowSrc} 
          alt="Arrow Right" 
          width={24} 
          height={24}
        />
      </div>
    </div>
  );
};

export default CTAButton;
