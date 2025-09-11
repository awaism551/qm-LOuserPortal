import React from "react";

type OrderSummaryProps = {
  title?: string;
  details?: { label: string; value: string }[];
  prices?: { label: string; value: string }[];
  totalLabel?: string;
  totalNote?: string;
  totalValue?: string;
  buttonLabel?: string;
  onCheckout?: () => void;
};

export default function OrderSummary({
  title = "Order Summary",
  details = [],
  prices = [],
  totalLabel = "Total",
  totalNote = "incl. Taxes",
  totalValue = "QAR 0",
  buttonLabel = "Proceed to Checkout",
  onCheckout,
}: OrderSummaryProps) {
  return (
    <div className="flex-1 px-6 py-5 bg-Background-Brand-1 inline-flex flex-col justify-start items-start gap-4">
      {/* Header */}
      <div className="self-stretch text-Typography-Black text-lg font-medium font-['GT_America'] leading-normal">
        {title}
      </div>

      <div className="self-stretch flex flex-col justify-start items-start gap-5">
        {/* Details Section */}
        {details.length > 0 && (
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            {details.map(({ label, value }, i) => (
              <div
                key={i}
                className="self-stretch inline-flex justify-between items-center gap-7"
              >
                <div className="text-Typography-Grey-700 text-base font-normal font-['GT_America'] leading-tight">
                  {label}
                </div>
                <div className="text-Typography-Black text-base font-medium font-['GT_America'] leading-tight">
                  {value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-stone-300" />

        {/* Prices Section */}
        {prices.length > 0 && (
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            {prices.map(({ label, value }, i) => (
              <div
                key={i}
                className="self-stretch inline-flex justify-between items-center gap-7"
              >
                <div className="text-Typography-Grey-700 text-base font-normal font-['GT_America'] leading-tight">
                  {label}
                </div>
                <div className="text-Typography-Black text-lg font-medium font-['GT_America'] leading-normal">
                  {value}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-stone-300" />

        {/* Total Section */}
        <div className="self-stretch inline-flex justify-between items-start gap-7">
          <div className="flex flex-col justify-center items-start gap-1">
            <div className="text-Typography-Black text-lg font-medium font-['GT_America'] leading-normal">
              {totalLabel}
            </div>
            <div className="text-Typography-Grey-700 text-sm font-normal font-['GT_America'] leading-tight">
              {totalNote}
            </div>
          </div>
          <div className="text-Typography-Black text-lg font-medium font-['GT_America'] leading-normal">
            {totalValue}
          </div>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={onCheckout}
        className="self-stretch outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 inline-flex justify-center items-center"
      >
        <div className="flex-1 h-12 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5">
          <span className="text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
            {buttonLabel}
          </span>
        </div>
      </button>
    </div>
  );
}
