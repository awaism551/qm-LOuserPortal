import React from 'react';

interface HeroTitleProps {
  title?: string;
  className?: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({
  title = "Become a Member For Exclusive Access",
  className = ""
}) => {
  return (
    <div data-layer="Frame 2131336885" className={`Frame2131336885 w-full flex flex-col justify-end items-start ${className}`}>
      <h1
        data-layer="About ALN"
        className="AboutAln w-full text-right text-white text-3xl md:text-5xl lg:text-6xl xl:text-[80px] font-light capitalize leading-tight md:leading-[1.1] lg:leading-[1.1] xl:leading-[88px]"
        style={{ fontFamily: "'Lyon Arabic Display', -apple-system, Roboto, Helvetica, sans-serif" }}
      >
        {title}
      </h1>
    </div>
  );
};

export default HeroTitle;
