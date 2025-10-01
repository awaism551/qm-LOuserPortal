import React, { JSX } from "react";

const JoinQatarSection = (): JSX.Element => {
  const textSegments = [
    { text: "Qatar Creates Membership is your ", isHighlighted: false },
    { text: "invitation", isHighlighted: true },
    { text: " to step into a living cultural ", isHighlighted: false },
    { text: "movement ", isHighlighted: true },
    { text: "- one built on access, ", isHighlighted: false },
    { text: "connection,", isHighlighted: true },
    { text: " and shared experience.", isHighlighted: false },
  ];

  return (
    <div className="w-full max-w-[886px] leading-[66px] md:leading-[110%] font-desktop-display-2xl-light font-[number:var(--desktop-display-2xl-light-font-weight)] text-[color:var(--token-typography-black)] text-3xl md:text-5xl lg:text-[60px] tracking-[var(--desktop-display-2xl-light-letter-spacing)] capitalize">
      {textSegments.map((segment, index) => (
        <span
          key={index}
          className={`${
            segment.isHighlighted ? "text-[#ff536d]" : "text-black"
          } font-desktop-display-2xl-light [font-style:var(--desktop-display-2xl-light-font-style)] font-[number:var(--desktop-display-2xl-light-font-weight)]`}
          style={{ fontFamily: "'Lyon Arabic Display', -apple-system, Roboto, Helvetica, sans-serif" }}
        >
          {segment.text}
        </span>
      ))}
    </div>
  );
};

export default JoinQatarSection;
