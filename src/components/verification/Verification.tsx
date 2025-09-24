import { rightArrowIcon } from "@/icons/icons";
// Update the import path to the correct location of Input component
// Update the import path to the correct location of Input component
import { Input } from "@/components/ui/input";
import { ChangeEvent, useRef, useState } from "react";
import VerificationPopup from "./VerificationPopup";
import Link from "next/link";

const Verification = () => {
  const [openModel, setOpenModal] = useState(false);
  const [email, setEmail] = useState("jsmith@gmail.com");
  const otpLength = 6;
  const otpRefs = useRef<Array<HTMLInputElement | null>>(
    Array(otpLength).fill(null)
  );

  function handleOtpChange(
    e: ChangeEvent<HTMLInputElement>,
    idx: number
  ) {
    const value = e.target.value;
    if (value.length === 1 && idx < otpLength - 1) {
      otpRefs.current[idx + 1]?.focus();
    }
  }

  return (
    <>
      <div className="self-stretch self-stretch px-14 inline-flex flex-col justify-center items-center gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-14">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-Typography-Black text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
              Verify your Identity
            </div>
            <div className="w-96 justify-start text-Typography-Grey-500 text-base font-normal font-['GT_America'] leading-tight">
              Please enter the OTP via SMS to continue.
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="w-96 justify-start">
                <span className="text-Typography-Grey-500 text-base font-normal font-['GT_America'] leading-tight">
                  Mobile Number:{" "}
                </span>
                <span className="text-Typography-Black text-base font-medium font-['GT_America'] leading-tight">
                  +12 598732947
                </span>
              </div>
            </div>
            <div className="self-stretch inline-flex justify-start items-start gap-3">
              {Array.from({ length: otpLength }).map((_, idx) => (
                <Input
                  key={idx}
                  ref={(el: HTMLInputElement | null) => {
                    otpRefs.current[idx] = el;
                  }}
                  type="text"
                  maxLength={1}
                  className="w-16 h-24 text-center text-2xl font-bold bg-Background-bg-primary border border-Border-border-primary"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleOtpChange(e, idx)
                  }
                />
              ))}
            </div>
            <div className="justify-start">
              <span className="text-Typography-Grey-500 text-base font-normal font-['GT_America'] leading-tight">
                Resend OTP in{" "}
              </span>
              <span className="text-Typography-Brand text-base font-medium font-['GT_America'] leading-tight">
                57s
              </span>
            </div>
          </div>
          <div className="inline-flex justify-start items-start gap-5">
            <Link href={`/en/login-signup/login`} className="flex-1">
            <div
              data-icon-placeholder="true"
              data-rtl="No"
              data-size="lg"
              data-state="Default 1"
              data-type="Secondary"
              className="outline outline-1 outline-offset-[-1px] outline-Stroke-White flex justify-start items-center"
            >
              <div className="h-12 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-Grey-100 flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="text-center justify-start text-Button-Background-Text-Black text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
                  Back to log in
                </div>
              </div>
              <div className="w-12 h-12 px-3.5 py-3 border-r border-t border-b border-Button-Background-Stroke-Grey-100 flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-6 relative overflow-hidden">
                  {rightArrowIcon("black")}
                </div>
              </div>
            </div>
            </Link>
            <div
              data-icon-placeholder="true"
              data-rtl="No"
              data-size="lg"
              onClick={() => setOpenModal(true)}
              data-state="Default 1"
              data-type="Primary"
              className="outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 flex justify-start items-center cursor-pointer"
            >
              <div className="h-12 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5 overflow-hidden cursor-pointer">
                <div className="text-center justify-start text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
                  Next
                </div>
              </div>
              <div className="w-12 h-12 px-3.5 py-3 bg-Button-Background-Default border-l border-Stroke-White-56%/60 flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-6 relative overflow-hidden">
                  {rightArrowIcon()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VerificationPopup openModel={openModel} setOpenModal={setOpenModal} mail={email} />
    </>
  );
};

export default Verification;
