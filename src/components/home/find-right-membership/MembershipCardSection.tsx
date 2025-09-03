import React, { JSX } from "react";

export const MembershipCardSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[18px] relative mt-[80px] mb-[200px]">
      <h1 className="relative self-stretch font-light text-white text-[80px] tracking-[0] leading-[67.2px]">
        Find the right membership for you
      </h1>

      <p className="relative w-[425px] subtitle font-desktop-text-xl-regular font-[number:var(--desktop-text-xl-regular-font-weight)] text-white/64 text-[length:var(--desktop-text-xl-regular-font-size)] tracking-[var(--desktop-text-xl-regular-letter-spacing)] leading-[var(--desktop-text-xl-regular-line-height)] [font-style:var(--desktop-text-xl-regular-font-style)]">
        A unified membership that connects you to the Qatar&apos;s cultural life
      </p>
    </section>
  );
};

export default MembershipCardSection;
