import { Separator } from "@/components/ui/separator";
import React, { JSX } from "react";
import { MembershipCardSection } from "./MembershipCardSection";
import { MembershipOptionsSection } from "./MembershipOptionsSection";

export default function FindRightMembership(): JSX.Element {
  return (
    <main id="find-right-membership" className="flex flex-col items-start gap-2.5 relative bg-[color:var(--token-background-white)] bg-[url('/images/find-right-membership.jpg')] bg-cover bg-center bg-no-repeat">
      <div className=" self-stretch justify-center flex w-full min-h-[985px] bg-[linear-gradient(78deg,rgba(0,0,0,0.1)_90%,rgba(0,0,0,0.86)_100%),linear-gradient(242deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.86)_100%)]">
        <div className="w-[1440px] relative overflow-hidden">
        <section className="w-[52%]">
          <MembershipCardSection />
        </section>

        <section className=" w-full h-[41%]">
          <MembershipOptionsSection />
        </section>

        <div className="flex w-full max-w-[1320px] items-center gap-20 absolute bottom-[61px] left-[60px]">
          <div className="relative w-full max-w-[1200px] h-px">
            <Separator className="w-full bg-white/20" />
            <div className="absolute w-[604px] h-[3px] top-[-1px] left-0 bg-gradient-to-r from-white/40 to-transparent" />
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}
