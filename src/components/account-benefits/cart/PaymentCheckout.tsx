import React from "react";
import { plusIcon, minusIcon } from "@/icons/icons";
import OrderSummary from "@/components/ui/OrderSummery";
import CheckoutHeader from "@/components/account-benefits/breadcrumb/CheckoutHeader";
import CheckoutBreadcrum from "@/components/account-benefits/breadcrumb/CheckoutBreadcrumb";
import { useRouter } from "next/navigation";

const PaymentCheckout = () => {
  const router = useRouter();
  const navigateToCheckout = () => {
    // Implement navigation to the checkout page
    router.push('/en/designs/accounts-benefits/checkout-details');
  }
  return (
    <div className="w-full bg-Background-Medjool inline-flex flex-col justify-start items-start gap-7 overflow-hidden">
      <CheckoutHeader />
      <div className="self-stretch self-stretch px-7 pt-5 pb-10 bg-Background-Medjool inline-flex flex-col justify-start items-start gap-5">
        <CheckoutBreadcrum />
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-7">
          <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20"></div>
          <div className="self-stretch inline-flex justify-start items-start gap-6">
            <div className="w-2/3 inline-flex flex-col justify-center items-start gap-6">
              <div className="inline-flex justify-between items-center gap-4 w-full">
                <div className="flex-1 inline-flex flex-col justify-center items-start gap-3">
                  <div className="self-stretch flex flex-col justify-start items-start gap-1">
                    <div className="self-stretch justify-start text-Typography-White text-lg font-medium font-['GT_America'] leading-normal">
                      Explorers Membership
                    </div>
                    <div className="justify-start">
                      <span className="text-Typography-White-64 text-sm font-normal font-['GT_America'] leading-tight">
                        Package by default included:
                      </span>
                      <span className="text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
                        {" "}
                        2 adults + up to 4 children
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex justify-start items-center gap-1">
                    <div className="w-3.5 h-3.5 relative overflow-hidden">
                      <div className="w-2 h-2.5 left-[2.62px] top-[3.21px] absolute outline outline-1 outline-offset-[-0.50px] outline-Iconography-Grey-300" />
                      <div className="w-3 h-0.5 left-[1.17px] top-[1.17px] absolute outline outline-1 outline-offset-[-0.50px] outline-Iconography-Grey-300" />
                      <div className="w-1 h-0 left-[5.54px] top-[9.62px] absolute origin-top-left -rotate-90 outline outline-1 outline-offset-[-0.50px] outline-Iconography-Grey-300" />
                      <div className="w-0 h-1 left-[8.46px] top-[6.12px] absolute outline outline-1 outline-offset-[-0.50px] outline-Iconography-Grey-300" />
                    </div>
                    <div className="justify-start text-Typography-White-64 text-sm font-normal font-['GT_America'] leading-tight">
                      Remove
                    </div>
                  </div>
                </div>
                <div className="flex justify-end items-center gap-2">
                  <div className="w-7 h-7 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-Stroke-White-20%/20 flex justify-center items-center gap-5 overflow-hidden">
                    <div className="w-4 h-4 relative">{minusIcon()}</div>
                  </div>
                  <div className="w-7 h-7 px-5 py-3 outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-5 overflow-hidden">
                    <div className="justify-start text-Typography-White text-base font-normal font-['GT_America'] leading-tight">
                      1
                    </div>
                  </div>
                  <div className="w-7 h-7 px-5 py-3 bg-white flex justify-center items-center gap-5 overflow-hidden">
                    <div className="w-4 h-4 relative">{plusIcon()}</div>
                  </div>
                </div>
              </div>
              <div className="self-stretch px-4 py-5 bg-white/5 outline outline-1 outline-offset-[-1px] outline-Stroke-White-20%/20 flex flex-col justify-center items-start gap-5">
                <div className="justify-start text-Typography-White text-base font-medium font-['GT_America'] leading-tight">
                  Want to add additional member?
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-4">
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                      <div className="self-stretch justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
                        Add addition adult in same household
                      </div>
                      <div className="self-stretch inline-flex justify-start items-center gap-2">
                        <div className="justify-start text-Typography-White-64 text-xs font-normal font-['GT_America'] leading-none">
                          Ticket holders must present an accepted and valid ID
                          for entry
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="w-7 h-7 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-Stroke-White-20%/20 flex justify-center items-center gap-5 overflow-hidden">
                        <div className="w-4 h-4 relative">{minusIcon()}</div>
                      </div>
                      <div className="w-7 h-7 px-5 py-3 outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-5 overflow-hidden">
                        <div className="justify-start text-Typography-White text-base font-normal font-['GT_America'] leading-tight">
                          1
                        </div>
                      </div>
                      <div className="w-7 h-7 px-5 py-3 bg-white flex justify-center items-center gap-5 overflow-hidden">
                        <div className="w-4 h-4 relative">{plusIcon()}</div>
                      </div>
                      <div className="w-7 h-7 px-5 py-3 bg-Background-White flex justify-center items-center gap-5 overflow-hidden">
                        <div className="w-4 h-4 relative overflow-hidden">
                          <div className="w-0 h-3 left-[9px] top-[3px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Black" />
                          <div className="w-3 h-0 left-[3px] top-[9px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Black" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20"></div>
                  <div className="self-stretch inline-flex justify-between items-center">
                    <div className="flex-1 inline-flex flex-col justify-start items-start gap-1">
                      <div className="self-stretch justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
                        Add addition child in same household
                      </div>
                      <div className="justify-start text-Typography-White-64 text-xs font-normal font-['GT_America'] leading-none">
                        Child has to be below the age of 19
                      </div>
                    </div>
                    <div className="flex justify-start items-center">
                      <div className="w-7 h-7 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-Stroke-White-20%/20 flex justify-center items-center gap-5 overflow-hidden">
                        <div className="w-4 h-4 relative">{minusIcon()}</div>
                      </div>
                      <div className="w-7 h-7 px-5 py-3 outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-5 overflow-hidden">
                        <div className="justify-start text-Typography-White text-base font-normal font-['GT_America'] leading-tight">
                          2
                        </div>
                      </div>
                      <div className="w-7 h-7 px-5 py-3 bg-white flex justify-center items-center gap-5 overflow-hidden">
                        <div className="w-4 h-4 relative">{plusIcon()}</div>
                      </div>
                      <div className="w-7 h-7 px-5 py-3 bg-Background-White flex justify-center items-center gap-5 overflow-hidden">
                        <div className="w-4 h-4 relative overflow-hidden">
                          <div className="w-0 h-3 left-[9px] top-[3px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Black" />
                          <div className="w-3 h-0 left-[3px] top-[9px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Black" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <OrderSummary
              details={[
                { label: "Membership Tier:", value: "Explorer" },
                { label: "Membership Duration:", value: "1 year" },
                { label: "Start Date:", value: "21 Sep, 2025" },
              ]}
              prices={[
                { label: "Membership Price (1 Item)", value: "QAR 500" },
                { label: "Addition Audit (1 item)", value: "QAR 150" },
                { label: "Addition Child (2 items)", value: "QAR 100" },
              ]}
              totalValue="QAR 750"
              onCheckout={() => navigateToCheckout()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentCheckout;
