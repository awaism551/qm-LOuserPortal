import React from 'react';

interface LoginButtonProps {
  href?: string;
  text?: string;
  className?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ 
  href = "#", 
  text = "log in",
  className = "" 
}) => {
  return (
    <a 
      href={href}
      className={`Button h-12 px-5 py-3 bg-Button-Background-White outline outline-1 outline-offset-[-1px] outline-Stroke-Grey flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer no-underline ${className}`}
    >
      <div data-layer="text" className="Text text-center justify-start text-Button-Background-Text-Black text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
        {text}
      </div>
    </a>
  );
};

export default LoginButton;
