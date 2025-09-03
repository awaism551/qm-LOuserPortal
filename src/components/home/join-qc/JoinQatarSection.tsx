import React, { JSX } from "react";

const JoinQatarSection = (): JSX.Element => {
  const textSegments = [
    { text: "Join Qatar Creates To ", isHighlighted: false },
    { text: "Connect", isHighlighted: true },
    { text: " Deeply With ", isHighlighted: false },
    { text: "Art", isHighlighted: true },
    { text: ", ", isHighlighted: false },
    { text: "Culture", isHighlighted: true },
    { text: ", And ", isHighlighted: false },
    { text: "Exclusive Experiences", isHighlighted: true },
    { text: " Shaping Qatar's Creative Community.", isHighlighted: false },
  ];

  return (
    <div className="w-full leading-[66px] font-desktop-display-2xl-light font-[number:var(--desktop-display-2xl-light-font-weight)] text-[color:var(--token-typography-black)] text-[length:var(--desktop-display-2xl-light-font-size)] tracking-[var(--desktop-display-2xl-light-letter-spacing)]">
      {textSegments.map((segment, index) => (
        <span
          key={index}
          className={`${
            segment.isHighlighted ? "text-[#ff536d]" : "text-black"
          } text-6xl font-desktop-display-2xl-light [font-style:var(--desktop-display-2xl-light-font-style)] font-[number:var(--desktop-display-2xl-light-font-weight)] tracking-[var(--desktop-display-2xl-light-letter-spacing)] leading-[var(--desktop-display-2xl-light-line-height)] `}
        >
          {segment.text}
        </span>
      ))}
    </div>
  );
};

export default JoinQatarSection;
