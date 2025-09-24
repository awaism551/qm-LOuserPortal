import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Carousel, CarouselContent, CarouselItem } from "@/components/test/carousel"

interface PublicEventsProps {
  eventlists: {
    id: number;
    title: string;
    category: string;
    date: string;
    description: string;
    location: string;
  }[];
}

const PublicEvents: React.FC<PublicEventsProps> = ({ eventlists }) => {
  return (
    <>
      <Carousel className="w-full grid">
            <CarouselContent>
              {eventlists.map((event, index) => (
                <CarouselItem key={event.id} className="basis-1/3 flex-shrink-0 mr-6">
                          <div
                            key={index}
                            className="flex-shrink-0 pb-6 flex-col justify-end items-start gap-2.5" // Added w-1/3 for 3 items per view
                          >
                            <div
                              data-breakpoint="Desktop"
                              className="px-5 pt-36 pb-6 relative bg-gradient-to-b from-black/0 to-black/80 flex flex-col justify-end items-start gap-2.5"
                              id="event-public-hero-section"
                            >
                              <div className="self-stretch justify-end items-end gap-40">
                                <div className="flex-1 flex-col justify-start items-start gap-3">
                                  <div className="self-stretch flex flex-col justify-start items-start gap-5">
                                    <div className="text-center justify-start text-Typography-White text-[10px] font-normal font-['GT_America'] uppercase leading-tight tracking-wide">
                                      {event.category}
                                    </div>
                                    <div className="self-stretch justify-start text-Typography-White text-2xl font-light font-['Lyon_Arabic_Display'] leading-7">
                                      {event.title}
                                    </div>
                                  </div>
                                  <div className="self-stretch flex flex-row justify-start items-center gap-4 h-9">
                                    {/* When & Timing */}
                                    <div className="flex flex-col gap-1">
                                      {/* When */}
                                      <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                          <div className="w-3 h-3 relative overflow-hidden">
                                            <div className="w-1 h-[3.25px] left-[4.25px] top-[6.12px] absolute outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey-300"></div>
                                            <div className="w-1.5 h-0.5 left-[3.25px] top-[1px] absolute outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey-300"></div>
                                            <div className="w-2 h-2 left-[1.50px] top-[2px] absolute outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey-300"></div>
                                            <div className="w-2 h-0 left-[1.50px] top-[4.50px] absolute outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey-300"></div>
                                          </div>
                                          <span className="text-Typography-White-light text-xs font-normal font-['GT_America'] leading-none">
                                            When
                                          </span>
                                        </div>
                                        <div className="w-2.5 h-0 rotate-90 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey-300"></div>
                                        <span className="text-Typography-White text-xs font-normal font-['GT_America'] leading-none">
                                          {event.date.split(" - ")[0]}
                                        </span>
                                        <span className="w-[3px] h-[3px] bg-Stroke-Grey-300 rounded-full"></span>
                                        <span className="text-Typography-White text-xs font-normal font-['GT_America'] leading-none">
                                          {event.date.split(" - ")[1]}
                                        </span>
                                      </div>
                                      {/* Location */}
                                      <div className="flex items-center gap-2">
                                        <div className="flex items-center gap-1">
                                          <div className="w-3 h-3 relative overflow-hidden">
                                            <div className="w-1 h-1 left-[4.25px] top-[3.75px] absolute outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey-300"></div>
                                            <div className="w-2 h-2.5 left-[1.50px] top-[1px] absolute outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey-300"></div>
                                          </div>
                                          <span className="text-Typography-White-64 text-xs font-normal font-['GT_America'] leading-none">
                                            Location
                                          </span>
                                        </div>
                                        <div className="w-2.5 h-0 rotate-90 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey-300"></div>
                                        <span className="text-Typography-White text-xs font-normal font-['GT_America'] leading-none">
                                          {event.location}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="w-8 h-8 px-3.5 py-3 bg-Button-Background-Blur-20 backdrop-blur-xl flex justify-center items-center gap-2.5 overflow-hidden">
                                    <div className="w-5 h-5 relative overflow-hidden">
                                      <div className="w-2.5 h-2.5 left-[5px] top-[5px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Button-Background-Icon-White"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-type="Public Event"
                                className="px-2.5 py-[5px] left-[20px] top-[20px] absolute bg-white backdrop-blur-xl justify-center items-center gap-2.5"
                              >
                                <div className="justify-start text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                                  Public Event
                                </div>
                              </div>
                            </div>
                          </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
    </>
  );
};

export default PublicEvents;
