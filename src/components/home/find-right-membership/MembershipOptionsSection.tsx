import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";
import React from "react";

const membershipData = [
  {
    title: "Insider",
    description: "Best membership for below criteria",
    criteria: [
      "INDIVIDUAL, AGE 20+",
      "CULTURALLY CURIOUS",
      "EXCLUSIVE, MEANINGFUL EXPERIENCES",
      "BUILD COMMUNITY CONNECTIONS",
    ],
    price: "QAR 350",
  },
  {
    title: "Explorer",
    description: "Best membership for below criteria",
    criteria: [
      "INDIVIDUAL, AGE 20+",
      "CULTURALLY CURIOUS",
      "EXCLUSIVE, MEANINGFUL EXPERIENCES",
      "BUILD COMMUNITY CONNECTIONS",
    ],
    price: "QAR 350",
  },
  {
    title: "Catalysts",
    description: "Best membership for below criteria",
    criteria: [
      "INDIVIDUAL, AGE 20+",
      "CULTURALLY CURIOUS",
      "EXCLUSIVE, MEANINGFUL EXPERIENCES",
      "BUILD COMMUNITY CONNECTIONS",
    ],
    price: "QAR 350",
  },
  {
    title: "Seeker",
    description: "Best membership for below criteria",
    criteria: [
      "INDIVIDUAL, AGE 20+",
      "CULTURALLY CURIOUS",
      "EXCLUSIVE, MEANINGFUL EXPERIENCES",
      "BUILD COMMUNITY CONNECTIONS",
    ],
    price: "QAR 350",
  },
  {
    title: "Patron",
    description: "Best membership for below criteria",
    criteria: [
      "INDIVIDUAL, AGE 20+",
      "CULTURALLY CURIOUS",
      "EXCLUSIVE, MEANINGFUL EXPERIENCES",
      "BUILD COMMUNITY CONNECTIONS",
    ],
    price: "QAR 350",
  },
];

export function MembershipOptionsSection() {
  return (
    <section className="flex items-start gap-5 w-full text-white">
      {membershipData.map((membership, index) => (
        <Card
          key={index}
          className="flex flex-col w-[414px] bg-[#0000003d] backdrop-blur-[50px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(50px)_brightness(100%)] border-none p-[40px]"
        >
          <CardContent className="flex flex-col items-start gap-10 p-0 w-[336px]">
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="w-full font-(family-name:--desktop-display-2xl-light-font-family) text-(length:--desktop-card-title-font-size) font-(--desktop-card-title-font-weight) leading-(--desktop-card-title-line-height) tracking-(--desktop-card-title-letter-spacing) capitalize">
                  {membership.title}
                </h3>
                <p className="subtitle">
                  {membership.description}
                </p>
              </div>

              <div
                  className="inline-flex items-center gap-2"
                >
              <ul className="card-section list-disc list-inside">
              {membership.criteria.map((criterion, criterionIndex) => (
                
                  <li key={criterionIndex} className="my-[12px]">
                    {criterion}
                  </li>
                
              ))}
              </ul>
              </div>
            </div>

            <div className="w-full border-b border-dashed" />

            <div className="flex items-center justify-between w-full">
              <div className="inline-flex items-center bg-[#FF536D]">
                <Button
                  className="h-10 bg-[#FF536D] px-5 py-3 bg-token-button-background-default font-desktop-text-sm-14-CTA font-[number:var(--desktop-text-sm-14-CTA-font-weight)] text-tokens-text-text-white text-[length:var(--desktop-text-sm-14-CTA-font-size)] tracking-[var(--desktop-text-sm-14-CTA-letter-spacing)] leading-[var(--desktop-text-sm-14-CTA-line-height)] [font-style:var(--desktop-text-sm-14-CTA-font-style)] hover:bg-token-button-background-default"
                >
                  VIEW DETAILS
                </Button>
                <Button
                  className="w-10 h-10 bg-[#FF536D] rounded-none border-l border-token-stroke-white-56 hover:bg-token-button-background-default"
                >
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>

              <span className="membership-price">
                {membership.price}
              </span>
            </div>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
