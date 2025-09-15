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
    <div className="self-stretch flex flex-col justify-start items-start gap-5">
      <div className="w-full inline-flex justify-start items-center gap-24">
        <div className="flex-1 justify-start text-white text-Typography-White text-3xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-loose">
          Your Scheduled Events
        </div>
      </div>
      <div className="self-stretch inline-flex flex-col justify-start items-start gap-7">
        <div className="w-full inline-flex justify-start items-start gap-6">
          <ScrollArea
            id="schedule-scroll-area"
            className="w-full"
          >
            <div className="inline-flex gap-6 mb-[30px]">
              {eventlists.map((event, index) => (
                <div
                  data-breakpoint="Desktop"
                  data-color="Purple BG"
                  key={event.id}
                  className="inline-flex flex-col justify-start items-start gap-5"
                  style={{ minWidth: "18rem", maxWidth: "18rem" }}
                >
                  <div
                    className="w-72 h-72 relative overflow-hidden"
                    id="event-schedule-hero-section"
                  >
                    <div className="w-20 p-2 left-[12px] top-[12px] absolute bg-white inline-flex flex-col justify-start items-center gap-1.5 overflow-hidden">
                      <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch justify-start text-black text-3xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-9">
                          {event.date.split(" - ")[0]}
                        </div>
                        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey"></div>
                      </div>
                      <div className="self-stretch justify-start text-Typography-Grey-500 text-xs font-normal font-['GT_America'] leading-none">
                        {event.date.split(" - ")[1]}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-5">
                    <div className="text-center justify-start text-Typography-white-64 text-sm font-normal font-['GT_America'] uppercase leading-tight tracking-wide">
                      {event.category}
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-3">
                      <div className="self-stretch justify-start text-Typography-White text-2xl font-normal font-['Lyon_Arabic_Display'] leading-7 break-words whitespace-pre-line">
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
                            <div className="text-center justify-start text-Button-Background-Text-White text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
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
            <ScrollBar className="h-2" orientation="horizontal" />
          </ScrollArea>
        </div>
        <div className="relative w-full flex justify-end items-center gap-2">
          <button
            type="button"
            className="w-9 h-9 p-1.5 outline outline-1 outline-offset-[-1px] outline-Stroke-White flex justify-center items-center bg-black/40 hover:bg-black/60 transition"
            aria-label="Scroll left"
            onClick={() => {
              const scrollArea = document.getElementById(
                "schedule-scroll-area"
              );
              if (scrollArea) {
                scrollArea
                  .querySelector("div")
                  ?.scrollBy({ left: -300, behavior: "smooth" });
              }
            }}
          >
            <div className="w-4 h-4">{leftArrowIcon()}</div>
          </button>
          <button
            type="button"
            className="w-9 h-9 p-1.5 outline outline-1 outline-offset-[-1px] outline-Stroke-White flex justify-center items-center bg-black/40 hover:bg-black/60 transition"
            aria-label="Scroll right"
            onClick={() => {
              const scrollArea = document.getElementById(
                "schedule-scroll-area"
              );
              if (scrollArea) {
                scrollArea
                  .querySelector("div")
                  ?.scrollBy({ left: 300, behavior: "smooth" });
              }
            }}
          >
            <div className="w-4 h-4">{rightArrowIcon()}</div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ScheduleEvents;
