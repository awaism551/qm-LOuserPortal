import { Separator } from "@/components/ui/separator";
import React, { JSX } from "react";

const stepsData = [
  {
    number: "01",
    title: "Explore & Choose An Open Call",
    description:
      "From fashion to film, music to design, discover the cultural festivals that shape Qatar's creative calendar.",
    image: "/images/getting-started-01.png",
  },
  {
    number: "02",
    title: "Prepare Your Submission",
    description:
      "From fashion to film, music to design, discover the cultural festivals that shape Qatar's creative calendar.",
    image: "/images/getting-started-02.png",
  },
  {
    number: "03",
    title: "Submit Via Portal Or Form",
    description:
      "From fashion to film, music to design, discover the cultural festivals that shape Qatar's creative calendar.",
    image: "/images/getting-started-03.png",
  },
];

export default function StepsToJoin(): JSX.Element {
  return (
    <div className="w-full flex justify-center">
    <div className="flex flex-col w-full max-w-[1440px] items-start gap-[60px] py-[100px] bg-token-background-white">
      <header className="w-full max-w-[1320px] justify-between flex items-start">
        <h1 className="font-(family-name:--font-lyon-arabic-display) text-[60px] font-normal leading-[66px]">
        How to Get Started
        </h1>

        <p className="w-[298px] font-desktop-text-md-regular font-[number:var(--desktop-text-md-regular-font-weight)] text-token-typography-grey-700 text-[length:var(--desktop-text-md-regular-font-size)] tracking-[var(--desktop-text-md-regular-letter-spacing)] leading-[var(--desktop-text-md-regular-line-height)] [font-style:var(--desktop-text-md-regular-font-style)]">
          From fashion to film, music to design, discover the cultural festivals
          that shape Qatar&apos;s creative calendar.
        </p>
      </header>

      <main className="flex flex-col w-full items-start">
        {stepsData.map((step, index) => (
          <section
            key={step.number}
            className="flex flex-col w-full items-start"
          >
            <div className="flex flex-col gap-10 pt-0 pb-20 px-0 w-full items-start">
              <Separator className="w-full h-px bg-gray-200" />

              <div className="gap-20 w-full flex items-start">
                <div className="font-(family-name:--font-lyon-arabic-display) text-[60px] font-normal leading-[66px] capitalize flex-1">
                  {step.number}
                </div>

                <div className="w-[847px] gap-[100px] flex items-start">
                  <div className="flex flex-col gap-5 flex-1 items-start">
                    <h2 className="font-(family-name:--font-lyon-arabic-display) text-[60px] font-normal leading-[66px] ">
                      {step.title}
                    </h2>

                    <p className="text-[18px] font-normal leading-[24px]">
                      {step.description}
                    </p>
                  </div>

                  <div
                    className="w-[140px] h-[140px] aspect-square bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${step.image})` }}
                  />
                </div>
              </div>
            </div>
          </section>
        ))}
      </main>
    </div>
    </div>
  );
}
