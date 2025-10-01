import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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
  },
  {
    id: 2,
    image: "/images/join-qc-2.jpg",
    category: "CULINARY",
    title: "Qatar International Food Festival",
    time: "19:00 - 19:30",
    location: "Lynx Tower, Doha. Qatar",
  },
  {
    id: 3,
    image: "/images/join-qc-3.jpg",
    category: "VISUAL ARTS",
    title: "Qatar International Art Festival",
    time: "19:00 - 19:30",
    location: "Lynx Tower, Doha. Qatar",
  },
  {
    id: 4,
    image: "/images/join-qc-4.jpg",
    category: "CINEMA",
    title: "Ajyal Film Festival",
    time: "19:00 - 19:30",
    location: "Lynx Tower, Doha. Qatar",
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
        <div className="flex items-start gap-5 overflow-x-auto no-scrollbar w-full">
          {eventData.map((event) => (
            <Card
              key={event.id}
              className="flex-shrink-0 w-[380px] border-0 px-0 shadow-none group"
            >
              <CardContent className="p-0 flex flex-col gap-5">
                <div className="relative w-[380px] h-[380px] aspect-square overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div
                      className="flex px-3 py-2 justify-center items-center gap-[10px] border border-white/56 bg-black/20 backdrop-blur-[24px]"
                      style={{ width: '114px', height: '36px' }}
                    >
                      <span
                        className="text-white text-base font-normal leading-5"
                        style={{ fontFamily: "'GT America', -apple-system, Roboto, Helvetica, sans-serif" }}
                      >
                        View Details
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-7 w-full">
                  <div className="flex flex-col gap-6 w-full">
                    <Badge
                      className="w-fit bg-transparent border-0 p-0 h-auto text-[#595959] text-sm font-normal leading-5 uppercase"
                      style={{
                        fontFamily: "'GT America', -apple-system, Roboto, Helvetica, sans-serif",
                        letterSpacing: '1px'
                      }}
                    >
                      {event.category}
                    </Badge>

                    <div className="flex flex-col gap-3 w-full">
                      <h3
                        className="text-black text-[36px] font-light leading-10 capitalize"
                        style={{ fontFamily: "'Lyon Arabic Display', -apple-system, Roboto, Helvetica, sans-serif" }}
                      >
                        {event.title}
                      </h3>

                      <div className="flex flex-col gap-3 w-full">
                        <div className="flex items-center gap-2 w-full">
                          <div className="flex items-center gap-1">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[18px] h-[18px]"
                            >
                              <g clipPath="url(#clip0_clock)">
                                <circle cx="9" cy="9" r="7.5" stroke="#808080" strokeWidth="1.5"/>
                                <path d="M9 5.25V9L10.875 10.875" stroke="#808080" strokeWidth="1.5"/>
                              </g>
                              <defs>
                                <clipPath id="clip0_clock">
                                  <rect width="18" height="18" fill="white"/>
                                </clipPath>
                              </defs>
                            </svg>
                            <span
                              className="text-[#4F4F4F] text-base font-normal leading-5"
                              style={{ fontFamily: "'GT America', -apple-system, Roboto, Helvetica, sans-serif" }}
                            >
                              Time
                            </span>
                          </div>
                          <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0L1 12" stroke="#808080"/>
                          </svg>
                          <span
                            className="text-black text-base font-normal leading-5"
                            style={{ fontFamily: "'GT America', -apple-system, Roboto, Helvetica, sans-serif" }}
                          >
                            {event.time}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 w-full">
                          <div className="flex items-center gap-1">
                            <svg
                              width="18"
                              height="18"
                              viewBox="0 0 18 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-[18px] h-[18px]"
                            >
                              <path d="M11.625 8.25C11.625 9.69975 10.4497 10.875 9 10.875C7.55025 10.875 6.375 9.69975 6.375 8.25C6.375 6.80025 7.55025 5.625 9 5.625C10.4497 5.625 11.625 6.80025 11.625 8.25Z" stroke="#808080" strokeWidth="1.5"/>
                              <path d="M15.75 8.25C15.75 13.5 9 16.5 9 16.5C9 16.5 2.25 13.5 2.25 8.25C2.25 4.52208 5.27208 1.5 9 1.5C12.7279 1.5 15.75 4.52208 15.75 8.25Z" stroke="#808080" strokeWidth="1.5"/>
                            </svg>
                            <span
                              className="text-[#4F4F4F] text-base font-normal leading-5"
                              style={{ fontFamily: "'GT America', -apple-system, Roboto, Helvetica, sans-serif" }}
                            >
                              Location
                            </span>
                          </div>
                          <svg width="2" height="12" viewBox="0 0 2 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0L1 12" stroke="#808080"/>
                          </svg>
                          <span
                            className="text-black text-base font-normal leading-5"
                            style={{ fontFamily: "'GT America', -apple-system, Roboto, Helvetica, sans-serif" }}
                          >
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
          <div className="flex-1 max-w-[1140px] h-[0.5px] relative">
            <div className="absolute left-0 top-0 w-full h-[0.5px] bg-[#E7E7E7]" />
            <div className="absolute left-0 top-[1px] w-full max-w-[604px] h-[1px] bg-black" />
          </div>

          <div className="flex items-center gap-[12px] flex-shrink-0">
            <button
              className="w-11 h-11 p-3 px-5 border border-black flex items-center justify-center"
              aria-label="Previous"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path d="M15 6L9 12L15 18" stroke="black" strokeWidth="1.5" strokeMiterlimit="16"/>
              </svg>
            </button>

            <button
              className="w-11 h-11 p-3 px-5 bg-[#FF536D] flex items-center justify-center"
              aria-label="Next"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path d="M9.00005 6L15 12L9 18" stroke="white" strokeWidth="1.5" strokeMiterlimit="16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
