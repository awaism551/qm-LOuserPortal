"use client";
import React from 'react';
import Logo from '@/components/ui/Logo';
import LanguageSelector from '@/components/ui/LanguageSelector';
import LoginButton from '@/components/ui/LoginButton';
import { usePathname } from 'next/navigation';

interface TopNavigationProps {
  className?: string;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ className = "" }) => {
  const pathname = usePathname();
  const currentLocale: 'en' | 'ar' = (pathname?.split('/')?.[1] === 'ar') ? 'ar' : 'en';
  return (
    <div data-layer="Top Nav" data-property-1="Default" className={`TopNav w-full px-4 md:px-8 lg:px-15 py-5 left-0 top-0 absolute inline-flex justify-between items-center ${className}`}>
      <div data-layer="Logo & Menu" className="LogoMenu flex justify-start items-center gap-14">
        <Logo />
      </div>
      <div className="flex justify-start items-center gap-7.5">
        <LanguageSelector currentLanguage={currentLocale} currentUrl={pathname || '/'} />
        <div data-layer="Search & CTA" className="SearchCta flex justify-start items-center gap-3">
          <div data-layer="Component 4" data-icon-placeholder="false" data-size="lg" data-state="Default 2" data-type="Primary" className="Component4 flex justify-start items-center">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
