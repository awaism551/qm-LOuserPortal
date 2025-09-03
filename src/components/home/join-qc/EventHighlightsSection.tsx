import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, ArrowRight, Clock, MapPin } from "lucide-react";
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
      <div className="flex items-center gap-3 px-0 py-5 border-t border-b border-dashed border-[#b0b0b066] overflow-hidden">
        <div className="flex items-center gap-3 animate-scroll">
          {bannerItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="[font-family:'GT_America-Regular',Helvetica] font-normal text-[color:var(--token-typography-black)] text-lg tracking-[0.90px] leading-6 whitespace-nowrap">
                {item}
              </span>
              {index < bannerItems.length - 1 && (
                <div className="w-[5px] h-[5px] bg-[#8080804c] rounded-[2.5px] flex-shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
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

        <div className="flex items-center gap-20 w-full">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent relative">
            <div className="absolute left-0 top-0 w-[604px] h-[3px] bg-gradient-to-r from-gray-600 to-transparent -translate-y-1" />
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="w-11 h-11 border-token-stroke-black bg-token-background-brand-2 h-auto"
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="w-11 h-11 bg-token-background-brand-2 border-[color:var(--token-iconography-black)] h-auto"
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
