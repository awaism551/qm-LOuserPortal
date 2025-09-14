import React, { useState } from "react";
import { membershipTire, issueType } from "@/app/context/EventLists";
import { rightArrowIcon } from "@/icons/icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Support(): React.JSX.Element {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="w-[734px] flex flex-col justify-start items-start gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-7">
          <div
            data-breakpoint="Desktop"
            data-color="Purple BG"
            data-right-icon="false"
            data-type="Filled"
            className="w-[734px] flex flex-col justify-start items-start gap-3"
          >
            <div className="self-stretch justify-start">
              <span className="text-Typography-white-64 text-sm font-medium font-['GT_America'] leading-tight">
                Full Name
              </span>
              <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                *
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="flex-1 flex justify-start items-center">
                  <input
                    className="flex-1 justify-start text-Typography-White text-lg font-normal font-['GT_America'] leading-normal bg-Background-Medjool outline-none"
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Jane Smith"
                  />
                </div>
              </div>
              <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20"></div>
            </div>
          </div>
          <div
            data-breakpoint="Desktop"
            data-color="Purple BG"
            data-right-icon="false"
            data-type="Filled"
            className="w-[734px] flex flex-col justify-start items-start gap-3"
          >
            <div className="self-stretch justify-start">
              <span className="text-Typography-white-64 text-sm font-medium font-['GT_America'] leading-tight">
                Email Address
              </span>
              <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                *
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="flex-1 flex justify-start items-center">
                  <input
                    className="flex-1 justify-start text-Typography-White text-lg font-normal font-['GT_America'] leading-normal bg-Background-Medjool outline-none"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20"></div>
            </div>
          </div>
          <div
            data-breakpoint="Desktop"
            data-color="Purple BG"
            data-right-icon="true"
            data-type="Filled"
            className="w-[734px] flex flex-col justify-start items-start gap-3"
          >
            <div className="self-stretch justify-start">
              <span className="text-Typography-white-64 text-sm font-medium font-['GT_America'] leading-tight">
                Membership Tier
              </span>
              <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                *
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="flex-1 flex justify-start items-center relative">
                  <Select>
                    <SelectTrigger className="w-full flex-1 justify-start text-Typography-White text-lg font-normal font-['GT_America'] leading-normal bg-Background-Medjool outline-none pr-8">
                      <div className="flex w-full items-center justify-between">
                        <SelectValue placeholder="Select" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {membershipTire &&
                        membershipTire.map((issue, index) => (
                          <SelectItem key={index} value={issue}>
                            {issue}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div
            data-breakpoint="Desktop"
            data-color="Purple BG"
            data-right-icon="true"
            data-type="Filled"
            className="w-[734px] flex flex-col justify-start items-start gap-3"
          >
            <div className="self-stretch justify-start">
              <span className="text-Typography-white-64 text-sm font-medium font-['GT_America'] leading-tight">
                Issue Type
              </span>
              <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                *
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="flex-1 flex justify-start items-center relative">
                  <Select>
                    <SelectTrigger className="w-full flex-1 justify-start text-Typography-White text-lg font-normal font-['GT_America'] leading-normal bg-Background-Medjool outline-none pr-8">
                      <div className="flex w-full items-center justify-between">
                        <SelectValue placeholder="Select" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {issueType &&
                        issueType.map((issue, index) => (
                          <SelectItem key={issue} value={issue}>
                            {issue}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div
            data-breakpoint="Desktop"
            data-color="Purple BG"
            data-right-icon="false"
            data-type="Filled"
            className="self-stretch flex flex-col justify-start items-start gap-3"
          >
            <div className="self-stretch justify-start">
              <span className="text-Typography-white-64 text-sm font-medium font-['GT_America'] leading-tight">
                Message
              </span>
              <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                *
              </span>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start">
              <div className="self-stretch inline-flex justify-between items-center">
                <div className="flex-1 flex justify-start items-center">
                  <div className="flex-1 justify-start text-Typography-White text-lg font-normal font-['GT_America'] leading-normal">
                    <textarea
                      className="flex-1 justify-start text-Typography-White text-lg font-normal font-['GT_America'] leading-normal bg-Background-Medjool outline-none resize-none h-13"
                      placeholder="Your message"
                      rows={4}
                      cols={75}
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20"></div>
            </div>
          </div>
        </div>
        <div
          data-icon-placeholder="true"
          data-size="lg"
          data-state="Default 1"
          data-type="Primary"
          className="outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 inline-flex justify-start items-center"
        >
          <div className="h-12 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="text-center justify-start text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
              Submit request
            </div>
          </div>
          <div className="w-12 h-12 px-3.5 py-3 bg-Button-Background-Default border-l border-Stroke-White-56%/60 flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="w-6 h-6 relative overflow-hidden">
              {rightArrowIcon()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
