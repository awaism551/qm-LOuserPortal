"use client";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { rightArrowIcon, leftArrowIcon } from "@/icons/icons";

interface ScheduleEventsProps {
  eventlists: {
    id: number;
    title: string;
    date: string;
    category: string;
  }[];
}

const ScheduleEvents: React.FC<ScheduleEventsProps> = ({ eventlists }) => {
  return (
    <>
      <div className="self-stretch justify-start text-white text-3xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-10">
        Your Scheduled Events
      </div>
       <ScrollArea className="flex gap-6 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100" id="scheduled-events-container">
      {/* <div className="flex gap-6 w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100" id="scheduled-events-container"> */}
        <div className="flex gap-4 py-4">
          {eventlists.map((event, index) => (
            <div
              key={index}
              data-breakpoint="Desktop"
              data-color="Purple BG"
              className="flex-shrink-0"
            >
              <div className="h-72 relative" id="event-schedule-hero-section">
                <div className="w-20 absolute top-4 left-4 p-2 bg-white gap-1.5">
                  <div className="text-black text-3xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-9">
                    {event.date.split(" - ")[0]}
                  </div>
                  <div className="h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey"></div>

                  <div className="text-Typography-Grey-500 text-xs font-normal font-['GT_America'] leading-none">
                    {event.date.split(" - ")[1]}
                  </div>
                </div>
              </div>

              <div className="self-stretch inline-flex flex-col justify-start items-start gap-5">
                <div className="text-center justify-start text-Typography-White-64 text-sm font-normal font-['GT_America'] uppercase leading-tight tracking-wide mt-[20px]">
                  {event.category}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                  <div className="justify-start text-Typography-White text-2xl font-light font-['Lyon_Arabic_Display'] leading-7 break-words whitespace-pre-line max-w-[18rem]">
                    {event.title}
                  </div>
                  <div className="self-stretch inline-flex justify-start items-start gap-3">
                    <div
                      data-icon-placeholder="false"
                      data-size="md"
                      data-state="Default 1"
                      data-type="Secondary"
                      className="flex-1 outline outline-1 outline-offset-[-1px] outline-Stroke-White flex justify-start items-center"
                    >
                      <div className="flex-1 h-11 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-Grey-100 flex justify-center items-center gap-2.5 overflow-hidden">
                        <div className="text-center justify-start text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
                          download tickets
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}
       <ScrollBar className="h-1" orientation="horizontal" />
      </ScrollArea>
      <div className="relative w-full flex justify-end items-center gap-2">
        <button
          className="p-2 outline outline-1 outline-white transition"
          onClick={() => {
            const container = document
              .querySelector("#scheduled-events-container [data-radix-scroll-area-viewport]") as HTMLElement;
            if (container) container.scrollBy({ left: -300, behavior: "smooth" });
          }}
          aria-label="Scroll left"
          type="button"
        >
          {leftArrowIcon()}
        </button>
        <button
          className="p-2 bg-brand-main  outline outline-1 outline-white transition"
          onClick={() => {
            const container = document
              .querySelector("#scheduled-events-container [data-radix-scroll-area-viewport]") as HTMLElement;
            if (container) container.scrollBy({ left: 300, behavior: "smooth" });
          }}
          aria-label="Scroll right"
          type="button"
        >
          {rightArrowIcon()}
        </button>
      </div>
    </>
  );
};
export default ScheduleEvents;
