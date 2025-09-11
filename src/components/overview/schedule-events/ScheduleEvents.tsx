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
    <div className="w-[1100px] inline-flex justify-start items-start gap-6">
      {eventlists.map((event, index) => (
        <div data-breakpoint="Desktop" data-color="Purple BG" key={index} className="inline-flex flex-col justify-start items-start gap-5">
            <div className="w-72 h-72 relative overflow-hidden"  id="event-schedule-hero-section">
                <div className="w-20 p-2 left-[12px] top-[12px] absolute bg-white inline-flex flex-col justify-start items-center gap-1.5 overflow-hidden">
                    <div className="self-stretch flex flex-col justify-start items-start gap-1">
                        <div className="self-stretch justify-start text-black text-3xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-9">  {event.date.split(" - ")[0]}</div>
                        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey"></div>
                    </div>
                    <div className="self-stretch justify-start text-Typography-Grey-500 text-xs font-normal font-['GT_America'] leading-none">  {event.date.split(" - ")[1]}</div>
                </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-5">
                <div className="text-center justify-start text-Typography-White-64%/60 text-sm font-normal font-['GT_America'] uppercase leading-tight tracking-wide">  {event.category}</div>
                <div className="self-stretch flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch justify-start text-Typography-White text-2xl font-normal font-['Lyon_Arabic_Display'] leading-7">  {event.title}</div>
                    <div className="self-stretch inline-flex justify-start items-start gap-3">
                        <div data-icon-placeholder="false" data-size="md" data-state="Default 1" data-type="Secondary" className="flex-1 outline outline-1 outline-offset-[-1px] outline-Stroke-White flex justify-start items-center">
                            <div className="flex-1 h-11 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-Grey-100 flex justify-center items-center gap-2.5 overflow-hidden">
                                <div className="text-center justify-start text-Button-Background-Text-White text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">download tickets</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 
      ))}
    </div>
    <div className="self-stretch inline-flex justify-start items-center gap-20">
        <div className="w-[936px] h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20"></div>
        <div className="w-[604px] h-0 outline outline-[3px] outline-offset-[-1.50px] outline-Stroke-White"></div>
        <div className="flex justify-start items-center gap-3">
            <div className="w-9 h-9 p-1.5 outline outline-1 outline-offset-[-1px] outline-Stroke-White flex justify-center items-center gap-5 overflow-hidden">
                <div className="w-4 h-4 relative overflow-hidden">
                {leftArrowIcon()}
                </div>
            </div>
            <div className="w-9 h-9 p-1.5 bg-Background-Brand-2 outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-5 overflow-hidden">
                <div className="w-4 h-4 relative overflow-hidden">
                {rightArrowIcon()}
                </div>
            </div>
        </div>
    </div>
</div>
</div>

    // <div>
    //   <div className="self-stretch flex flex-col justify-start items-start gap-5">
    //     <div className="w-full inline-flex justify-start items-center gap-24">
    //       <div className="flex-1 justify-start text-white text-Typography-White text-3xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-loose">
    //         Your Scheduled Events
    //       </div>
    //     </div>
    //     <ScrollArea className="w-5/6 whitespace-nowrap pb-8">
    //     <div className="self-stretch flex flex-col justify-start items-start gap-7">
    //       <div className="w-full inline-flex justify-start items-start gap-6">
    //         {eventlists.map((event) => (
    //           <div
    //             data-breakpoint="Desktop"
    //             data-color="Purple BG"
    //             key={event.id}
    //             className="inline-flex flex-col justify-start items-start gap-5"
    //           >
    //             <div
    //               className="w-80 h-80 relative overflow-hidden"
    //               id="event-schedule-hero-section"
    //             >
    //               <div className="w-20 p-2 left-[12px] top-[12px] absolute bg-white bg-Background-White inline-flex flex-col justify-start items-center gap-1.5 overflow-hidden">
    //                 <div className="self-stretch flex flex-col justify-start items-start gap-1">
    //                   <div className="self-stretch justify-start text-black text-3xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-9">
    //                     {event.date.split(" - ")[0]}
    //                   </div>
    //                   <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey"></div>
    //                 </div>
    //                 <div className="self-stretch justify-start text-black text-xs font-normal font-['GT_America'] leading-none">
    //                   {event.date.split(" - ")[1]}
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="self-stretch flex flex-col justify-start items-start gap-5">
    //               <div className="text-center justify-start text-white text-sm font-normal font-['GT_America'] uppercase leading-tight tracking-wide">
    //                 {event.category}
    //               </div>
    //               <div className="self-stretch inline-flex flex-col justify-start items-start gap-3">
    //                 <div className="w-3/4 self-stretch justify-start text-Typography-White text-2xl font-normal font-['Lyon_Arabic_Display'] leading-7">
    //                   {event.title}
    //                 </div>
    //                 <div className="self-stretch inline-flex justify-start items-start gap-3">
    //                   <div
    //                     data-icon-placeholder="false"
    //                     data-size="md"
    //                     data-state="Default 1"
    //                     data-type="Secondary"
    //                     className="flex-1 outline outline-1 outline-offset-[-1px] outline-Stroke-White flex justify-start items-center"
    //                   >
    //                     <div className="flex-1 h-11 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-Grey-100 flex justify-center items-center gap-2.5 overflow-hidden">
    //                       <div className="text-center justify-start text-white text-Button-Background-Text-White text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
    //                         download tickets
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     <ScrollBar orientation="horizontal" className="h-1" />
    //     </ScrollArea>
    //   </div>
    //   <div className="flex justify-end items-center mr-76 mb-18">
    //           <div className="w-9 h-9 p-1.5 outline outline-1 outline-offset-[-1px] outline-Stroke-White flex justify-center items-center gap-5 overflow-hidden">
    //             <div className="w-4 h-4 relative overflow-hidden">
    //               {leftArrowIcon()}
    //             </div>
    //           </div>
    //           <div className="w-9 h-9 p-1.5 bg-Background-Brand-2 outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-5 overflow-hidden">
    //             <div className="w-4 h-4 relative overflow-hidden">
    //               {rightArrowIcon()}
    //             </div>
    //           </div>
    //         </div>
    // </div>
  );
};
export default ScheduleEvents;
