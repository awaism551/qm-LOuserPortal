import React, { useState } from "react";
const LazySupportRequest = React.lazy(() => import("./Support"));
const LazyFrequentQueries = React.lazy(() => import("./FrequentQueries"));

export default function SupportRequest(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="px-52 pt-9 pb-24 relative bg-Background-Medjool w-full grid gap-7 justify-start items-center 
        sm:grid-cols-1 sm:justify-center sm:items-start
        md:grid-cols-1
        lg:grid-cols-1
      ">
        <div className="h-24 justify-left items-start gap-2">
          <div className="self-stretch justify-start text-Typography-White text-4xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-10
        sm:text-2xl
          ">
        Help & Support
          </div>
          <div className="max-w-full justify-start text-Typography-white-64 text-base font-normal font-['GT_America'] leading-tight
        sm:w-full
          ">
        We’re here to support you with your membership, bookings, or
        account. most inquiries are responded to within 24 hours.
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-6 w-full">
          <div
        data-breakpoint="Desktop"
        className="border-b border-Stroke-White-20%/20 inline-flex justify-start items-center gap-6 w-full
          sm:flex-col sm:gap-2 sm:items-stretch sm:border-b-0
        "
          >
        <div className="flex flex-row w-full border-b border-Stroke-White-20%/20">
            <div
            data-breakpoint="Desktop"
            data-color="Purple BG"
            data-status={activeTab === "tab1" ? "Selected" : "Default"}
            className={`px-0 py-3 cursor-pointer font-['GT_America'] text-base font-normal leading-tight text-left ${
              activeTab === "tab1" ? "text-white border-b-2 border-Stroke-Brand" : "text-Typography-white-64"
            }`}
            onClick={() => setActiveTab("tab1")}
            >
            Support Request
            </div>
          <div
            data-breakpoint="Desktop"
            data-color="Purple BG"
            data-status={activeTab === "tab2" ? "Selected" : "Default"}
            className={`px-6 py-3 cursor-pointer font-['GT_America'] text-base font-normal leading-tight ${
              activeTab === "tab2" ? "text-white border-b-2 border-Stroke-Brand" : "text-Typography-white-64"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Frequently Asked Questions
          </div>
        </div>
          </div>
        </div>
        <div className="w-full">
          {activeTab == "tab1" ? <LazySupportRequest /> : <LazyFrequentQueries />}
        </div>
      </div> 
    </React.Suspense>
  );
}
