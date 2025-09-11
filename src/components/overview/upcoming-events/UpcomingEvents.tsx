import { rightArrowIcon, leftArrowIcon } from "@/icons/icons";

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
    <div className="w-full h-[593px] inline-flex flex-col justify-start items-start gap-5">
      <div className="w-full inline-flex justify-start items-center gap-24">
        <div className="flex-1 justify-start text-white text-3xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-loose">
          Upcoming Events & Programs
        </div>
        <div className="justify-start text-Typography-Brand text-base font-medium font-['GT_America'] leading-tight">
          See all
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-start gap-6">
        {eventlists.map((event, index) => ( 
             <div
             data-breakpoint="Desktop"
             data-color="Purple BG"
             data-type="Smal"
             className="inline-flex flex-col justify-start items-start gap-5"
             key={index}
           >
             <div className="w-72 h-72 relative overflow-hidden" id="event-upcoming-hero-section">
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
                    {event.category}
               </div>
               <div className="self-stretch flex flex-col justify-start items-start gap-3">
                 <div className="w-80 self-stretch justify-start text-white text-2xl font-normal font-['Lyon_Arabic_Display'] leading-7">
                     {event.title}
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
                          {event.date.split(" - ")[0]}
                     </div>
                     <div className="w-[5px] h-[5px] bg-Iconography-Grey-400 rounded-full" />
                     <div className="justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
                            {event.date.split(" - ")[1]}
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
                       {event.location}
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
  );
};
export default UpcomingEvents;
