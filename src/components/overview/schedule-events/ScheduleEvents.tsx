"use client";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
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
      <Carousel className="w-full">
      <CarouselContent>
        {eventlists.map((event, index) => (
          <CarouselItem
            key={index}
            className="flex-shrink-0 mr-[24px] pl-0" // 👈 4 per slide + spacing
          >
            <div
              data-breakpoint="Desktop"
              data-color="Purple BG"
              className="flex flex-col"
            >
              {/* Card top (date badge over hero) */}
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

              {/* Card bottom */}
              <div className="flex flex-col justify-start items-start gap-5 mt-5">
                <div className="text-Typography-White-64 text-sm font-normal font-['GT_America'] uppercase leading-tight tracking-wide">
                  {event.category}
                </div>
                <div className="flex flex-col gap-3">
                  <div className="text-Typography-White text-2xl font-light font-['Lyon_Arabic_Display'] leading-7 break-words whitespace-pre-line max-w-[18rem]">
                    {event.title}
                  </div>
                  <div className="flex gap-3">
                    <div
                      data-type="Secondary"
                      className="flex-1 outline outline-1 outline-offset-[-1px] outline-Stroke-White flex justify-center items-center"
                    >
                      <div className="h-11 px-5 py-3 flex justify-center items-center">
                        <div className="text-white text-base font-normal font-['GT_America'] uppercase">
                          download tickets
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Left / Right arrows */}
      <div className="absolute right-10 flex gap-2 p-0 mt-[24px]">
        <CarouselPrevious className="p-2 outline outline-1 outline-white rounded bg-transparent text-white hover:bg-brand-main hover:text-white transition-colors" />
        <CarouselNext className="p-2 outline outline-1 outline-white rounded bg-transparent text-white hover:bg-brand-main hover:text-white transition-colors" />
      </div>
    </Carousel>
      
    </>
  );
};
export default ScheduleEvents;
