"use client";
import React from "react";
import { useState } from "react";
import GuestBannerMsg from "@/components/account-benefits/banner/GuestBannerMsg";
import AccountDetails from "@/components/account-benefits/details/AccountDetails";
import MembershipDetails from "@/components/account-benefits/details/MemberDetails";

export default function Page(): React.JSX.Element {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="w-full px-4 sm:px-7 pt-7 pb-10 bg-Background-Medjool grid gap-7 overflow-hidden">
      <GuestBannerMsg />
      <div className="self-stretch border-b border-Stroke-White-20%/20 inline-flex justify-start items-center gap-6">
        <div
          data-color="Purple BG"
          data-status="Selected"
          className="inline-flex flex-col justify-start items-start gap-3"
        >
          <div
            className={`justify-start ${
              activeTab == "tab1"
                ? "text-Typography-White"
                : "text-typography-white-64"
            } text-base font-normal font-['GT_America'] leading-tight cursor-pointer`}
            onClick={() => setActiveTab("tab1")}
          >
            Account Details
          </div>
          {activeTab == "tab1" && (
            <div className="self-stretch h-0 outline outline-[1.50px] outline-offset-[-0.75px] outline-Stroke-Brand"></div>
          )}
        </div>
        <div
          data-color="Purple BG"
          data-status="Default"
          className="h-8 inline-flex flex-col justify-start items-start gap-3"
        >
          <div
            className={`justify-start ${
              activeTab == "tab2"
                ? "text-Typography-White"
                : "text-typography-white-64"
            } text-base font-normal font-['GT_America'] leading-tight cursor-pointer`}
            onClick={() => setActiveTab("tab2")}
          >
            Membership Benefits
          </div>
          {activeTab == "tab2" && (
            <div className="self-stretch h-0 outline outline-[1.50px] outline-offset-[-0.75px] outline-Stroke-Brand"></div>
          )}
        </div>
      </div>
      {activeTab == "tab1" ? <AccountDetails /> : <MembershipDetails />}
    </div>
  );
}
