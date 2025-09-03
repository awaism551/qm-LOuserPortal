import React from 'react';

interface LanguageSelectorProps {
  href?: string;
  language?: string;
  className?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  href = "#", 
  language = "العربية",
  className = "" 
}) => {
  return (
    <a 
      href={href} 
      className={`justify-start text-Typography-White text-base font-medium font-['IBM_Plex_Sans_Arabic'] leading-relaxed cursor-pointer no-underline hover:opacity-80 transition-opacity ${className}`}
    >
      {language}
    </a>
  );
};

export default LanguageSelector;
