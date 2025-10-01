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
      className={`Button h-12 px-5 py-3 bg-white border border-[#E7E7E7] flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer no-underline ${className}`}
    >
      <div
        data-layer="text"
        className="text-center text-black text-base font-normal uppercase leading-6"
        style={{
          fontFamily: "'GT America', -apple-system, Roboto, Helvetica, sans-serif",
          letterSpacing: '0.16px'
        }}
      >
        {text}
      </div>
    </a>
  );
};

export default LoginButton;
