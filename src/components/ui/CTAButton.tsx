import React from 'react';

interface CTAButtonProps {
  text?: string;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  text = "Apply for Membership",
  className = ""
}) => {
  return (
    <div
      data-layer="Component 5"
      data-icon-placeholder="true"
      data-size="lg"
      data-state="Default 1"
      data-type="Tertiary"
      className={`Component5 inline-flex items-center border border-white/56 ${className}`}
    >
      <div
        data-layer="Button"
        className="Button h-12 px-5 py-3 bg-white/20 backdrop-blur-[24px] flex justify-center items-center gap-2.5"
      >
        <span
          data-layer="text"
          className="text-center text-white text-base font-normal uppercase leading-6 whitespace-nowrap"
          style={{
            fontFamily: "'GT America', -apple-system, Roboto, Helvetica, sans-serif",
            letterSpacing: '0.16px'
          }}
        >
          {text}
        </span>
      </div>
      <div
        data-layer="Button/Default"
        className="ButtonDefault w-12 h-12 px-[14px] py-3 bg-white/20 border-l border-white/56 backdrop-blur-[24px] flex justify-center items-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path
            d="M9.00005 6L15 12L9 18"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="16"
          />
        </svg>
      </div>
    </div>
  );
};

export default CTAButton;
