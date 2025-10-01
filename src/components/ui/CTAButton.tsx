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
    <div
      data-layer="Component 5"
      data-icon-placeholder="true"
      data-size="lg"
      data-state="Default 1"
      data-type="Tertiary"
      className={`Component5 inline-flex outline outline-1 outline-offset-[-1px] outline-white/60 rounded-lg overflow-hidden ${className}`}
    >
      <div data-layer="Button" className="Button h-10 md:h-12 px-3 md:px-5 py-2 md:py-3 bg-white/20 backdrop-blur-xl flex justify-center items-center gap-2.5">
        <span
          data-layer="text"
          className="Text text-center text-white text-sm md:text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight whitespace-nowrap"
        >
          {text}
        </span>
      </div>
      <div data-layer="Button/Default" className="ButtonDefault w-10 md:w-12 h-10 md:h-12 px-2 md:px-3.5 py-2 md:py-3 bg-white/20 border-l border-white/60 backdrop-blur-xl flex justify-center items-center">
        <Image
          src={arrowSrc}
          alt="Arrow Right"
          width={20}
          height={20}
          className="md:w-6 md:h-6"
        />
      </div>
    </div>
  );
};

export default CTAButton;
