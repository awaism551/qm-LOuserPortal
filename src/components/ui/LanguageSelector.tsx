"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

interface LanguageSelectorProps {
  currentLanguage: 'en' | 'ar';
  currentUrl: string; // pathname like "/en/designs/overview"
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, currentUrl }) => {
  const router = useRouter();

  const targetLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
  const targetLabel = currentLanguage === 'ar' ? 'English' : 'العربية';

  const buildUrlWithLocale = (pathname: string, locale: 'en' | 'ar') => {
    if (!pathname || pathname === '/') return `/${locale}`;
    const parts = pathname.split('/').filter(Boolean);
    if (parts.length === 0) return `/${locale}`;
    // Replace first segment (locale) if it's a known locale, otherwise prepend
    if (parts[0] === 'en' || parts[0] === 'ar') {
      parts[0] = locale;
      return '/' + parts.join('/');
    }
    return `/${locale}/` + parts.join('/');
  };

  const onToggleLanguage = () => {
    const nextUrl = buildUrlWithLocale(currentUrl, targetLanguage);
    router.push(nextUrl);
  };

  return (
    <button
      type="button"
      onClick={onToggleLanguage}
      className="justify-start text-Typography-White text-base font-medium font-['IBM_Plex_Sans_Arabic'] leading-relaxed cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-0 p-0"
    >
      {targetLabel}
    </button>
  );
};

export default LanguageSelector;
