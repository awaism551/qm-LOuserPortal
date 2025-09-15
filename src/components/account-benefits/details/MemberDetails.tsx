import React from "react";
import { checkIcon } from "@/icons/icons";
import { InsiderBenefits } from "@/app/context/EventLists";
import Link from "next/link";

const MembershipDetails = () => {
  return (
    <div className="inline-flex justify-end items-start gap-3">
    {InsiderBenefits.map((benefit, index) => (
      <div className="w-80 inline-flex flex-col justify-start items-start bg-white" key={index}>
        <div
          data-breakpoint="Desktop"
          data-type="Light"
          className="self-stretch h-96 p-6 bg-Background-Brand-1 flex flex-col justify-between items-start"
        >
          <div className="self-stretch flex flex-col justify-start items-start gap-7">
            <div className="flex flex-col justify-start items-start gap-0.5">
              <div className="w-64 justify-start text-Typography-Black text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
                {benefit.title}
              </div>
              <div className="w-64 justify-start text-Typography-Grey-700 text-sm font-normal font-['GT_America'] leading-tight">
               {benefit.description}
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-2">
              <div className="w-64 justify-start text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                Who This Membership Suits
              </div>
              <div className="flex flex-col justify-start items-start gap-1">
                {benefit.membershipFor.map((item, idx) => ( 
                <div className="inline-flex justify-start items-center gap-2" key={idx}> 
                  <div className="w-1.5 h-1.5 bg-Stroke-Brand" />
                  <div className="w-64 justify-start text-Typography-Black text-sm font-normal font-['GT_America'] leading-tight">
                     {item} 
                  </div>
                </div>
                 ))} 
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="relative inline-flex justify-start items-end gap-1">
              <div className="justify-start text-Typography-Black text-xl font-medium font-['GT_America'] leading-normal">
                QR {benefit.price}
              </div>
              <div className="left-[77px] top-[6px] absolute justify-start text-Typography-Grey-700 text-xs font-normal font-['GT_America'] leading-none">
                for yearly
              </div>
            </div>
            <Link href="/en/designs/accounts-benefits/cart" className="self-stretch">
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div
                data-icon-placeholder="false"
                data-size="sm"
                data-state="Default 1"
                data-type="Primary"
                className="self-stretch outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 inline-flex justify-start items-center"
              >
                <div className="flex-1 h-10 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="text-center justify-start text-white text-sm font-normal font-['GT_America'] uppercase leading-tight tracking-wide" >
                    Subscribe Now
                  </div>
                </div>
              </div>
              <div className="w-64 justify-start text-Typography-Grey-700 text-xs font-normal font-['GT_America'] leading-none">
                Membership can be paused or canceled anytime
              </div>
            </div>
            </Link>
          </div>
        </div>
        <div className="self-stretch p-6 bg-Background-White outline outline-1 outline-offset-[-1px] outline-Stroke-Grey flex flex-col justify-start items-start gap-3">
          <div className="w-72 justify-start text-Typography-Grey-500 text-sm font-normal font-['GT_America'] leading-tight">
            What’s included
          </div>
          <div className="w-72 flex flex-col justify-start items-start gap-2.5">
          {benefit.benefitlist.map((item, idx) => (
              <div
                data-breakpoint="Desktop"
                className="self-stretch inline-flex justify-start items-start gap-2"
                key={idx}
              >
                <div className="py-0.5 flex justify-start items-center gap-2.5">
                  <div className="w-4 h-4 relative overflow-hidden">
                    {checkIcon()}
                  </div>
                </div>
                <div className="flex-1 justify-start text-Typography-Black text-sm font-normal font-['GT_America'] leading-tight">
                 {item}
                </div>
              </div>
          ))} 
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};
export default MembershipDetails;
