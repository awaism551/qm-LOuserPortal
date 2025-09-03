import React from 'react';
import Logo from '@/components/ui/Logo';
import LanguageSelector from '@/components/ui/LanguageSelector';
import LoginButton from '@/components/ui/LoginButton';

interface TopNavigationProps {
  className?: string;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ className = "" }) => {
  return (
    <div data-layer="Top Nav" data-property-1="Default" className={`TopNav w-full px-14 py-5 left-0 top-0 absolute inline-flex justify-between items-center ${className}`}>
      <div data-layer="Logo & Menu" className="LogoMenu size- flex justify-start items-center gap-14">
        <Logo />
      </div>
      <div data-layer="Frame 2131336071" className="Frame2131336071 size- flex justify-start items-center gap-7">
        <LanguageSelector />
        <div data-layer="Search & CTA" className="SearchCta size- flex justify-start items-center gap-3">
          <div data-layer="Component 4" data-icon-placeholder="false" data-size="lg" data-state="Default 2" data-type="Primary" className="Component4 size- outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 flex justify-start items-center">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
