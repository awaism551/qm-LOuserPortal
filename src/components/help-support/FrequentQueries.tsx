import React, { useState } from "react";
import { plusIconBig } from "@/icons/icons";
import { faqList } from "@/app/context/EventLists";


function FrequentlyQueries() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
    <div className="w-[734px] flex flex-col justify-start items-start gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-7">
        {faqList.map((faq, idx) => (
        <div
          key={faq.question}
          data-breakpoint="Desktop"
          data-status={openIndex === idx ? "Yes" : "No"}
          className="self-stretch inline-flex justify-start items-start"
        >
          <div
            className={`w-[648px] p-8 bg-Button-Background-Blur-10 ${
            openIndex === idx ? "border-b border-Stroke-White" : ""
            } inline-flex flex-col justify-center items-start gap-5`}
          >
            <div className="self-stretch justify-start text-Typography-White text-2xl font-light font-['Lyon_Arabic_Display'] leading-7">
            {faq.question}
            </div>
            {openIndex === idx && (
            <div className="w-full max-w-[700px] justify-start text-Typography-white-64 text-base font-normal font-['GT_America'] leading-tight">
              {faq.answer}
            </div>
            )}
          </div>
          <button
            className={`self-stretch px-7 py-7 bg-Button-Background-Blur-10 ${openIndex === idx ? "border-b" : ""}  flex justify-center items-start gap-2.5 overflow-hidden`}
            onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
            aria-label={openIndex === idx ? "Collapse" : "Expand"}
          >
            <div className="w-7 h-7 relative overflow-hidden flex items-center justify-center">
            {openIndex === idx ? (
              <div className="w-0 h-5 left-[23.33px] top-[14px] absolute origin-top-left rotate-90 outline outline-2 outline-offset-[-1px] outline-Iconography-White" />
            ) : (
              plusIconBig("#ffff")
            )}
            </div>
          </button>
        </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default FrequentlyQueries;
