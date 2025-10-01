import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const bannerItems = [
  "EARLY EVENT ACCESS",
  "MEMBERS-ONLY INVITATIONS",
  "INSIDER TALKS & CONTENT",
  "GIFTS & PARTNER PERKS",
  "GIFTS & PARTNER PERKS",
];

const eventData = [
  {
    id: 1,
    image: "/images/join-qc-1.jpg",
    category: "CRAFTSMANSHIP",
    title: "Doha Jewelry & Watches Exhibition",
    time: "19:00 - 19:30",
    location: "Lynx Tower, Doha. Qatar",
    hasViewDetails: false,
  },
  {
    id: 2,
    image: "/images/join-qc-2.jpg",
    category: "CULINARY",
    title: "Qatar International Food Festival",
    time: "19:00 - 19:30",
    location: "Lynx Tower, Doha. Qatar",
    hasViewDetails: true,
  },
  {
    id: 3,
    image: "/images/join-qc-3.jpg",
    category: "VISUAL ARTS",
    title: "Qatar International Art Festival",
    time: "19:00 - 19:30",
    location: "Lynx Tower, Doha. Qatar",
    hasViewDetails: false,
  },
  {
    id: 4,
    image: "/images/join-qc-4.jpg",
    category: "CINEMA",
    title: "Ajyal Film Festival",
    time: "19:00 - 19:30",
    location: "Lynx Tower, Doha. Qatar",
    hasViewDetails: false,
  },
];

export default function EventHighlightsSection() {
  return (
    <section className="flex flex-col items-start gap-10 w-full">
      <div className="flex flex-wrap items-center gap-3 px-0 py-5 border-t border-b border-dashed border-[rgba(176,176,176,0.40)] w-full">
        {bannerItems.map((item, index) => (
          <React.Fragment key={index}>
            <span
              className="font-normal text-black text-sm md:text-base lg:text-lg leading-6 uppercase"
              style={{
                fontFamily: "'GT America', -apple-system, Roboto, Helvetica, sans-serif",
                letterSpacing: '0.9px'
              }}
            >
              {item}
            </span>
            {index < bannerItems.length - 1 && (
              <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <circle cx="2.5" cy="2.5" r="2.5" fill="#808080" fillOpacity="0.3"/>
              </svg>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="flex flex-col items-start gap-[60px] w-full">
        <div className="flex items-start gap-5 overflow-x-auto w-full">
          {eventData.map((event) => (
            <Card
              key={event.id}
              className="flex-shrink-0 w-[380px] border-0 test-asl px-0 shadow-none"
            >
              <CardContent className="p-0 flex flex-col gap-5">
                <div className="relative w-[380px] h-[380px] aspect-square">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover bg-cover bg-center"
                  />
                  {event.hasViewDetails && (
                    <div className="absolute bottom-[116px] right-[190px]">
                      <Button
                        className="bg-[#00000033] border border-white/56 backdrop-blur-xl text-white hover:bg-[#00000050] h-auto px-3 py-2"
                      >
                        View Details
                      </Button>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-7 w-full">
                  <div className="flex flex-col gap-6 w-full">
                    <Badge
                      className="w-fit font-desktop-text-sm-14-CTA font-[number:var(--desktop-text-sm-14-CTA-font-weight)] text-token-typography-grey-500 text-[length:var(--desktop-text-sm-14-CTA-font-size)] tracking-[var(--desktop-text-sm-14-CTA-letter-spacing)] leading-[var(--desktop-text-sm-14-CTA-line-height)] bg-transparent border-0 p-0 h-auto [font-style:var(--desktop-text-sm-14-CTA-font-style)]"
                    >
                      {event.category}
                    </Badge>

                    <div className="flex flex-col gap-3 w-full">
                      <h3 className="font-desktop-display-md-light font-[number:var(--desktop-display-md-light-font-weight)] text-[color:var(--token-typography-black)] text-[length:var(--desktop-display-md-light-font-size)] tracking-[var(--desktop-display-md-light-letter-spacing)] leading-[var(--desktop-display-md-light-line-height)] [font-style:var(--desktop-display-md-light-font-style)]">
                        {event.title}
                      </h3>

                      <div className="flex flex-col gap-3 w-full">
                        <div className="flex items-center gap-2 w-full">
                          <div className="flex items-center gap-1">
                            <Clock className="w-[18px] h-[18px]" />
                            <span className="text-token-typography-grey-700 font-desktop-text-md-regular font-[number:var(--desktop-text-md-regular-font-weight)] text-[length:var(--desktop-text-md-regular-font-size)] tracking-[var(--desktop-text-md-regular-letter-spacing)] leading-[var(--desktop-text-md-regular-line-height)] [font-style:var(--desktop-text-md-regular-font-style)]">
                              Time
                            </span>
                          </div>
                          <div className="h-3 w-px bg-gray-300" />

                          <span className="text-[color:var(--token-typography-black)] font-desktop-text-md-regular font-[number:var(--desktop-text-md-regular-font-weight)] text-[length:var(--desktop-text-md-regular-font-size)] tracking-[var(--desktop-text-md-regular-letter-spacing)] leading-[var(--desktop-text-md-regular-line-height)] [font-style:var(--desktop-text-md-regular-font-style)]">
                            {event.time}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 w-full">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-[18px] h-[18px]" />
                            <span className="text-token-typography-grey-700 font-desktop-text-md-regular font-[number:var(--desktop-text-md-regular-font-weight)] text-[length:var(--desktop-text-md-regular-font-size)] tracking-[var(--desktop-text-md-regular-letter-spacing)] leading-[var(--desktop-text-md-regular-line-height)] [font-style:var(--desktop-text-md-regular-font-style)]">
                              Location
                            </span>
                          </div>
                          <div className="h-3 w-px bg-gray-300" />

                          <span className="text-[color:var(--token-typography-black)] font-desktop-text-md-regular font-[number:var(--desktop-text-md-regular-font-weight)] text-[length:var(--desktop-text-md-regular-font-size)] tracking-[var(--desktop-text-md-regular-letter-spacing)] leading-[var(--desktop-text-md-regular-line-height)] [font-style:var(--desktop-text-md-regular-font-style)]">
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center gap-10 md:gap-20 w-full">
          <div className="flex-1 h-[0.5px] relative">
            <div className="absolute left-0 top-0 w-full h-[0.5px] bg-[#E7E7E7]" />
            <div className="absolute left-0 top-0 w-full max-w-[604px] h-[1px] bg-black" />
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              className="w-11 h-11 border border-black flex items-center justify-center"
              aria-label="Previous"
            >
              <ArrowLeft className="w-6 h-6 stroke-black" strokeWidth="1.5" />
            </button>

            <button
              className="w-11 h-11 bg-[#FF536D] flex items-center justify-center"
              aria-label="Next"
            >
              <ArrowRight className="w-6 h-6 stroke-white" strokeWidth="1.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
