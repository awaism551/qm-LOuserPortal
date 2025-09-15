import React from 'react';
import { HeroSection } from '@/components';

//import JoinQC from '@/components/join-qc/main';
import FrameScreen from '@/components/home/join-qc';
import FindRightMembership from '@/components/home/find-right-membership';
import BecomeAMember from '@/components/home/become-a-member';
import StepsToJoin from '@/components/home/steps-to-join';
import OurPartners from '@/components/home/our-partners';
import Faqs from '@/components/home/faqs';
import Footer from '@/components/footer';

export default function Page(): React.JSX.Element {
  return (
    <>
      <HeroSection />
      <FrameScreen />
      <FindRightMembership />
      <BecomeAMember />
      <StepsToJoin />
      <OurPartners />
      <Faqs />
      <Footer />
    </>
  );
}