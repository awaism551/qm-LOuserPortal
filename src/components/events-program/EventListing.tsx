import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { sortOption } from "@/app/context/EventLists";

import { downArrowIcon, upArrowIcon } from "@/icons/icons";

import React, { useState } from "react";

const Eventlisting = () => {
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [selectedTab, setSelectedTab] = useState("All Events");

  return (
    <div className="self-stretch p-7 relative bg-Background-Medjool inline-flex flex-col justify-start items-start gap-7">
      <div className="w-full flex flex-col justify-center items-start gap-5">
        <div className="self-stretch justify-start text-Typography-White text-4xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-10">
          Events & Programs
        </div>
        <div className="self-stretch inline-flex justify-between items-end">
          <div className="inline-flex justify-start items-center gap-3">
            <div
              data-breakpoint="Desktop"
              data-color="Purple BG"
              data-show-right-icon="false"
              data-status={selectedTab === "All Events" ? "Selected" : "Default"}
              className={`h-10 px-3 py-1.5 flex justify-center items-center gap-1.5 overflow-hidden ${
                selectedTab === "All Events"
                  ? "bg-Background-Brand-2"
                  : "bg-Button-Background-Blur-10"
              }`}
              onClick={() => setSelectedTab("All Events")}
            >
               <div className="text-center justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
              All Events
              </div>
            </div>
            <div
              data-breakpoint="Desktop"
              data-color="Purple BG"
              data-show-right-icon="false"
              data-status="Default"
              className={`h-10 px-3 py-1.5  ${
                selectedTab === "Public Events"
                  ? "bg-Background-Brand-2"
                  : "bg-Button-Background-Blur-10"
              } outline outline-1 outline-offset-[-1px] outline-Stroke-White-20%/20 flex justify-center items-center gap-1.5 overflow-hidden`}
              onClick={() => setSelectedTab("Public Events")}
            >
              <div className="text-center justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
              Public Events
              </div>
            </div>
            <div
              data-breakpoint="Desktop"
              data-color="Purple BG"
              data-show-right-icon="false"
              data-status="Default"
              className={`h-10 px-3 py-1.5  ${
                selectedTab === "Exclusive Events"
                  ? "bg-Background-Brand-2"
                  : "bg-Button-Background-Blur-10"
              } outline outline-1 outline-offset-[-1px] outline-Stroke-White-20%/20 flex justify-center items-center gap-1.5 overflow-hidden`}
              onClick={() => setSelectedTab("Exclusive Events")}
            >
              <div className="text-center justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
              Exclusive Events
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center gap-5">
            <div
              data-left-icon="true"
              data-property-1="Desktop"
              className="h-10 px-4 py-3 bg-Button-Background-Blur-10%/10 outline outline-1 outline-offset-[-1px] outline-Stroke-White flex justify-start items-center gap-2 overflow-hidden"
            >
              <div className="text-center justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
                <DropdownMenu onOpenChange={() => setShowUpArrow(!showUpArrow)}>
                  <DropdownMenuTrigger className="flex items-center gap-2">
                    Newest to Oldest
                    {/* Up/Down arrow icons */}
                    {showUpArrow ? upArrowIcon() : downArrowIcon()}
                  </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-10 mt-2">
                    <div
                        data-property-1="Desktop"
                        className="bg-white inline-flex justify-start items-start gap-1 overflow-hidden"
                    >
                        <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                            {sortOption.map((label, idx) => (
                                <div
                                    key={idx}
                                    data-breakpoint="Desktop"
                                    data-type="Default"
                                    className="self-stretch p-2 bg-white inline-flex justify-start items-center gap-1.5"
                                >
                                    <input
                                        type="radio"
                                        name="event-sort"
                                        id={`event-sort-${idx}`}
                                        className="accent-Background-Brand-2"
                                        defaultChecked={idx === 0}
                                    />
                                    <label
                                        htmlFor={`event-sort-${idx}`}
                                        className="flex-1 cursor-pointer justify-start text-Button-Background-Text-Black text-base font-normal font-['GT_America'] leading-tight"
                                    >
                                        {label}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20"></div>
      </div>
      <div className="self-stretch flex flex-wrap justify-start items-start gap-6">
        {Array.from({ length: 9 }).map((_, idx) => (
          <div
            key={idx}
            data-breakpoint="Desktop"
            data-color="Purple BG"
            data-type="Smal"
            className="w-[350px] h-[466px] flex flex-col justify-start items-start gap-5"
          >
            <div
               className="w-[351px] h-[300px] relative"
              id="event-upcoming-hero-section"
            >
              <div
                data-type="Public Event"
                className="px-2.5 py-[5px] left-[12px] top-[12px] absolute bg-white backdrop-blur-xl inline-flex justify-center items-center gap-2.5"
              >
                <div className="justify-start text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                  Public Event
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-5">
              <div className="text-center justify-start text-Typography-White-light text-sm font-normal font-['GT_America'] uppercase leading-tight tracking-wide">
                Architecture & Urban
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-3">
                <div className="w-full self-stretch justify-start text-white text-2xl font-normal font-['Lyon_Arabic_Display'] leading-7">
                  The Power of Storytelling in the Gulf Feild of the world
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="flex justify-start items-center gap-1">
                      <div className="w-4 h-4 relative overflow-hidden">
                        <div className="w-1 h-1 left-[5.67px] top-[8.17px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Grey-300" />
                        <div className="w-2 h-[2.67px] left-[4.33px] top-[1.33px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Grey-300" />
                        <div className="w-3 h-3 left-[2px] top-[2.67px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Grey-300" />
                        <div className="w-3 h-0 left-[2px] top-[6px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Grey-300" />
                      </div>
                      <div className="justify-start text-Typography-White-light text-sm font-normal font-['GT_America'] leading-tight">
                        When
                      </div>
                    </div>
                    <div className="w-3 h-0 origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20"></div>
                    <div className="justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
                      21 Jun, 2025
                    </div>
                    <div className="w-[5px] h-[5px] bg-Iconography-Grey-400 rounded-full" />
                    <div className="justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
                      19:00 - 19:30
                    </div>
                  </div>
                  <div className="self-stretch inline-flex justify-start items-center gap-2">
                    <div className="flex justify-start items-center gap-1">
                      <div className="w-4 h-4 relative overflow-hidden">
                        <div className="w-1 h-1 left-[5.66px] top-[5px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Grey-300" />
                        <div className="w-3 h-3.5 left-[2px] top-[1.33px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Grey-300" />
                      </div>
                      <div className="justify-start text-Typography-White-light text-sm font-normal font-['GT_America'] leading-tight">
                        Location
                      </div>
                    </div>
                    <div className="color- w-3 h-0 origin-top-left rotate-90 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20"></div>
                    <div className="flex-1 justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
                      Lynx Tower, Doha. Qatar
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Eventlisting;
