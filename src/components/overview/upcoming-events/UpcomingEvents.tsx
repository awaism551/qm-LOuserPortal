"use client";
import { rightArrowIcon, leftArrowIcon } from "@/icons/icons";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

type Event = {
  id: number;
  type: string;
  title: string;
  date: string;
  category: string;
  location: string;
};

interface UpcomingEventsProps {
  eventlists: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ eventlists }) => {
  return (
    <>
      <div className="w-full flex justify-between items-center mb-2">
        <div className="text-white text-3xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-10">
          Upcoming Events & Programs
        </div>
        <div className="text-Typography-Brand text-base font-medium font-['GT_America'] leading-tight">
          See all
        </div>
      </div>
      <Carousel className="w-full grid">
        <CarouselContent>
          {eventlists.map((event, index) => (
            <CarouselItem
              key={index}
              className="flex-shrink-0 mr-[24px] pl-0" // 👈 4 per slide + spacing
            >
              <div
                key={index}
                data-breakpoint="Desktop"
                data-color="Purple BG"
                className="flex-shrink-0"
              >
                <div className="h-72 relative" id="event-upcoming-hero-section">
                  <div className="absolute top-4 left-4 bg-white px-3 py-1.5 rounded shadow">
                    <div className="text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                      Public Event
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
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                      <div className="self-stretch inline-flex justify-start items-center gap-2">
                        <div className="flex justify-start items-center gap-1">
                          {/* When Icon */}
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
                        <div className="w-3 h-0 rotate-90 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20"></div>
                        <div className="justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
                          {event.date}
                        </div>
                      </div>
                      <div className="self-stretch inline-flex justify-start items-center gap-2">
                        <div className="flex justify-start items-center gap-1">
                          {/* Location Icon */}
                          <div className="w-4 h-4 relative overflow-hidden">
                            <div className="w-1 h-1 left-[5.66px] top-[5px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Grey-300" />
                            <div className="w-3 h-3.5 left-[2px] top-[1.33px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Grey-300" />
                          </div>
                          <div className="justify-start text-Typography-White-light text-sm font-normal font-['GT_America'] leading-tight">
                            Location
                          </div>
                        </div>
                        <div className="w-3 h-0 rotate-90 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20"></div>
                        <div className="flex-1 justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
                          {event.location}
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
      <div className="flex gap-2 absolute bottom-2 right-8 z-9999 overflow-visible">
        <CarouselPrevious className="p-2 mt-8 outline outline-1 outline-white rounded bg-transparent text-white hover:bg-brand-main hover:text-white transition-colors" />
        <CarouselNext className="p-2 mt-8 outline outline-1 outline-white rounded bg-transparent text-white hover:bg-brand-main hover:text-white transition-colors" />
      </div>
    </Carousel>
    </>
  );
};
export default UpcomingEvents;
