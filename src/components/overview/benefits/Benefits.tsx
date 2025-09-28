import { useState } from "react";
import { cardIcon, rightArrowIcon, tickIcon } from "@/icons/icons";
import { benefitsList } from "@/app/context/EventLists";
import WalletPopup from "./WalletPopup";
import SimpleAlertPopup from "@/components/alert-popup/SimpleAlertPopup";
import {
  giftHeading as Heading,
  giftDescription as Description,
  giftButtonText as buttonText,
  giftButtonURL as buttonURL,
} from "@/app/context/Constant";

const Benefits = () => {
  const [openModel, setOpenModal] = useState(false);
  const [giftopen, setGiftOpen] = useState(false);

  return (
    <>
      <div className="w-full inline-flex justify-start items-center gap-24">
        <div className="flex-1 justify-start text-Typography-White text-3xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-loose">
          Yours Benefits
        </div>
        <div className="py-0.5 flex justify-center items-center gap-2.5">
          <div className="justify-start text-Typography-White text-base font-medium font-['GT_America'] leading-tight">
            See all
          </div>
        </div>
      </div>
      <div className="inline-flex justify-start items-start gap-6">
        {benefitsList.map((benefit, index) => (
          <div
            data-breakpoint="Desktop"
            data-cta="true"
            key={index}
            data-property-1="Default"
            data-rtl="No"
            className="w-72 h-80 p-6 bg-Background-Grey inline-flex flex-col justify-between items-start"
          >
            <div className="w-12 h-12 relative overflow-hidden">
              {benefit.icon}
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-6">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="inline-flex justify-start items-start gap-1.5">
                  {benefit.badges?.map((badge, idx) => (
                    <div
                      key={idx}
                      className="px-1.5 py-1 bg-zinc-800/10 flex justify-center items-center gap-1.5 overflow-hidden"
                    >
                      <div className="text-center justify-start text-Button-Background-Text-Black text-xs font-medium font-['GT_America'] leading-none">
                        {badge}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-2">
                  <div className="self-stretch justify-start text-Typography-Black text-lg font-medium font-['GT_America'] leading-normal">
                    {benefit.title}
                  </div>
                  <div className="self-stretch justify-start text-Typography-Grey-500 text-base font-normal font-['GT_America'] leading-tight">
                    {benefit.description}
                  </div>
                </div>
              </div>
                <div
                data-icon-placeholder="true"
                data-rtl="No"
                data-size="xs"
                data-state="Default 1"
                onClick={() => {
                  if (benefit.id === 1) setOpenModal(true);
                  else if (benefit.id === 2) setGiftOpen(true);
                }}
                data-type="Secondary"
                className="outline outline-1 outline-offset-[-1px] outline-Stroke-White inline-flex justify-start items-center cursor-pointer"
                >
                <div className="h-8 px-5 py-2 outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-Grey-100 flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="text-center justify-start text-Button-Background-Text-Black text-sm font-normal font-['GT_America'] uppercase leading-tight tracking-wide">
                  {benefit.buttonText}
                  </div>
                </div>
                <div className="w-8 h-8 px-3.5 py-3 border-r border-t border-b border-Button-Background-Stroke-Grey-100 flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="w-5 relative">{rightArrowIcon("black")}</div>
                </div>
                </div>
            </div>
          </div>
        ))}
      </div>
      <WalletPopup openModel={openModel} setOpenModal={setOpenModal} />
      <SimpleAlertPopup
        open={giftopen}
        onOpenChange={setGiftOpen}
        content={{
          icon: tickIcon(),
          Heading,
          Description,
          buttonText,
          buttonURL,
        }}
      />
    </>
  );
};

export default Benefits;
