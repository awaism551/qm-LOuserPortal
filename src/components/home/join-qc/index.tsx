import React, { JSX } from "react";
import EventHighlightsSection from "./EventHighlightsSection";
import JoinQatarSection from "./JoinQatarSection";

const FrameScreen = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col justify-center w-full max-w-[1440px] mx-auto px-4 md:px-8 lg:px-[60px] items-start gap-10 py-[100px] relative bg-white">
        <JoinQatarSection />
        <EventHighlightsSection />
      </div>
    </div>
  );
};

export default FrameScreen;
