"use client";
import { infoIcon, rightArrowIcon } from "@/icons/icons";
import Link from "next/link";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import ForgetPopup from "./ForgetPopup";

type Inputs = {
    example: string
    exampleRequired: string
  }

const ForgetPassword = () => {
     const [openModel, setOpenModal] = useState(false);
     const [email, setEmail] = useState("");
    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    //   } = useForm<Inputs>()
    //   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <>
      <div className="self-stretch self-stretch px-14 inline-flex flex-col justify-center items-center gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-14">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-Typography-Black text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
              Forgot Password?
            </div>
            <div className="w-96 justify-start text-Typography-Grey-500 text-base font-normal font-['GT_America'] leading-tight">
              Enter the email address you used to sign up to Qatar Creates and
              we’ll send you instructions.
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-10">
            <div
              data-breakpoint="Desktop"
              data-color="White BG"
              data-right-icon="false"
              data-rtl="No"
              data-show-tooltip="false"
              data-type="Default"
              className="self-stretch flex flex-col justify-start items-start gap-3"
            >
              <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                <div className="flex-1 justify-start">
                  <span className="text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                    Email Address
                  </span>
                  <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                    *
                  </span>
                </div>
                <div
                  data-alignment="Right"
                  data-rtl="No"
                  data-show-tooltip="false"
                  className="inline-flex flex-col justify-start items-center"
                >
                  <div className="w-4 h-4 relative overflow-hidden">
                    {infoIcon()}
                    {/* <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute outline outline-[1.20px] outline-offset-[-0.60px] outline-Iconography-Grey-300" />
                    <div className="w-[1.33px] h-1.5 left-[6.67px] top-[4.33px] absolute outline outline-1 outline-offset-[-0.50px] outline-Iconography-Grey-300" /> */}
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch inline-flex justify-between items-center">
                    <input type="email" placeholder="Please enter your mail address" className="flex-1 outline-none text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal" onChange={(e) => setEmail(e.target.value)}/>
                  {/* <div className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal">
                    Please enter your mail address
                  </div> */}
                </div>
                <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey" />
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
                    {/* <div className="w-1.5 h-3 left-[9px] top-[6px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Button-Background-Icon-Black" /> */}
                  </div>
                </div>
                
              </div>
              </Link>
              <div
                data-icon-placeholder="true"
                data-rtl="No"
                data-size="lg"
                data-state="Default 1"
                onClick={() => setOpenModal(true)}
                data-type="Primary"
                className="outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 flex justify-start items-center cursor-pointer"
              >
                <div className="h-12 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="text-center justify-start text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
                    reset password
                  </div>
                </div>
                <div className="w-12 h-12 px-3.5 py-3 bg-Button-Background-Default border-l border-Stroke-White-56%/60 flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="w-6 relative overflow-hidden">
                    {rightArrowIcon()}
                    {/* <div className="w-1.5 h-3 left-[9px] top-[6px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Button-Background-Icon-White" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ForgetPopup openModel={openModel} setOpenModal={setOpenModal} mail={email}/>
    </>
  );
};

export default ForgetPassword;
