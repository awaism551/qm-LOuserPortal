import React, { useState } from "react";
const LazySupportRequest = React.lazy(() => import("./Support"));
const LazyFrequentQueries = React.lazy(() => import("./FrequentQueries"));

export default function SupportRequest(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="px-52 pt-9 pb-24 relative bg-Background-Medjool inline-flex flex-col justify-start items-center gap-7">
        <div className="w-[734px] h-24 flex flex-col justify-center items-start gap-2">
          <div className="self-stretch justify-start text-Typography-White text-4xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-10">
            Help & Support
          </div>
          <div className="w-[511px] justify-start text-Typography-white-64 text-base font-normal font-['GT_America'] leading-tight">
            We’re here to support you with your membership, bookings, or
            account. most inquiries are responded to within 24 hours.
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-6">
          <div
            data-breakpoint="Desktop"
            className="w-[734px] border-b border-Stroke-White-20%/20 inline-flex justify-start items-center gap-6"
          >
            <div
              data-breakpoint="Desktop"
              data-color="Purple BG"
              data-status={activeTab === "tab1" ? "Selected" : "Default"}
              className="inline-flex flex-col justify-start items-start gap-3"
            >
              <div
              className={`justify-start text-base font-normal font-['GT_America'] leading-tight cursor-pointer ${
                activeTab === "tab1" ? "text-white" : "text-Typography-white-64"
              }`}
              onClick={() => setActiveTab("tab1")}
              >
              Support Request
              </div>
              {activeTab == "tab1" && (
              <div className="self-stretch h-0 outline outline-[1.50px] outline-offset-[-0.75px] outline-Stroke-Brand"></div>
              )}
            </div>
            <div
              data-breakpoint="Desktop"
              data-color="Purple BG"
              data-status={activeTab === "tab2" ? "Selected" : "Default"}
              className="h-8 inline-flex flex-col justify-start items-start gap-3"
            >
              <div
              className={`justify-start text-base font-normal font-['GT_America'] leading-tight cursor-pointer ${
                activeTab === "tab2" ? "text-white" : "text-Typography-white-64"
              }`}
              onClick={() => setActiveTab("tab2")}
              >
              Frequently Asked Questions
              </div>
              {activeTab == "tab2" && (
                <div className="self-stretch h-0 outline outline-[1.50px] outline-offset-[-0.75px] outline-Stroke-Brand"></div>
              )}
            </div>
          </div>
        </div>
        {activeTab == "tab1" ? <LazySupportRequest /> : <LazyFrequentQueries />}
      </div>
    </React.Suspense>
  );
}
