import React from 'react';
import Image from 'next/image';

interface LogoProps {
  href?: string;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ href = "#", className = "" }) => {
  return (
    <div data-layer="Layer_1" className={`Layer1 w-32 h-11 relative overflow-hidden ${className}`}>
      <a href={href} className="block w-full h-full">
        <div data-layer="Logo" className="Logo w-32 h-11 left-0 top-[0.04px] absolute bg-Iconography-White">
          <Image 
            src="/images/Logo.svg" 
            alt="Logo" 
            width={128} 
            height={44}
            priority
          />
        </div>
      </a>
    </div>
  );
};

export default Logo;
