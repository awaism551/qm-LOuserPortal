import { useState } from "react";
import { infoIcon, rightArrowIcon, eyeIcon } from "@/icons/icons";
import Link from "next/link";
import AlertPopup from "./AlertPopup";

const Signup = () => {
  const [openModel, setOpenModal] = useState(false);

  return (
    <>
      <div className="self-stretch self-stretch px-14 inline-flex flex-col justify-center items-center gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-14">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="w-80 justify-start text-Typography-Black text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
              Get started
              <br />
              with Qatar Creates
            </div>
            <div className="self-stretch justify-start">
              <span className="text-Text-text-primary text-base font-normal font-['GT_America'] leading-tight">
                Already have an account?{" "}
              </span>
              <span className="text-Typography-Brand text-base font-medium font-['GT_America'] underline leading-tight">
                <Link href="/en/login-signup/login">Log in</Link>
              </span>
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-9">
              <div className="self-stretch flex flex-col justify-start items-start gap-8">
                <div className="self-stretch inline-flex justify-start items-start gap-6">
                  <div
                    data-breakpoint="Desktop"
                    data-color="White BG"
                    data-right-icon="false"
                    data-rtl="No"
                    data-show-tooltip="false"
                    data-type="Default"
                    className="flex-1 inline-flex flex-col justify-start items-start gap-3"
                  >
                    <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start">
                        <span className="text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                          First Name
                        </span>
                        <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                          *
                        </span>
                      </div>
                      <div
                        data-property-1="Right"
                        data-rtl="No"
                        data-show-tooltip="false"
                        className="inline-flex flex-col justify-start items-center"
                      >
                        <div className="w-4 h-4 relative overflow-hidden">
                          {infoIcon()}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                      <div className="self-stretch inline-flex justify-between items-center">
                        <input
                          type="text"
                          placeholder="Enter your first name"
                          className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal outline-none"
                        />
                      </div>
                      <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey" />
                    </div>
                  </div>
                  <div
                    data-breakpoint="Desktop"
                    data-color="White BG"
                    data-right-icon="false"
                    data-rtl="No"
                    data-show-tooltip="false"
                    data-type="Default"
                    className="flex-1 inline-flex flex-col justify-start items-start gap-3"
                  >
                    <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                      <div className="flex-1 justify-start">
                        <span className="text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                          Last Name
                        </span>
                        <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                          *
                        </span>
                      </div>
                      <div
                        data-property-1="Right"
                        data-rtl="No"
                        data-show-tooltip="false"
                        className="inline-flex flex-col justify-start items-center"
                      >
                        <div className="w-4 h-4 relative overflow-hidden">
                          {infoIcon()}
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col justify-start items-start gap-2">
                      <div className="self-stretch inline-flex justify-between items-center">
                        <input
                          type="text"
                          placeholder="Enter your last name"
                          className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal outline-none"
                        />
                      </div>
                      <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey" />
                    </div>
                  </div>
                </div>
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
                      data-property-1="Right"
                      data-rtl="No"
                      data-show-tooltip="false"
                      className="inline-flex flex-col justify-start items-center"
                    >
                      <div className="w-4 h-4 relative overflow-hidden">
                        {infoIcon()}
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch inline-flex justify-between items-center">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal outline-none"
                      />
                    </div>
                    <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey" />
                  </div>
                </div>
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="self-stretch inline-flex justify-start items-start gap-6">
                    <div
                      data-breakpoint="Desktop"
                      data-color="White BG"
                      data-right-icon="true"
                      data-rtl="No"
                      data-show-tooltip="false"
                      data-type="Default"
                      className="flex-1 inline-flex flex-col justify-start items-start gap-3"
                    >
                      <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                        <div className="flex-1 justify-start">
                          <span className="text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                            Password
                          </span>
                          <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                            *
                          </span>
                        </div>
                        <div
                          data-property-1="Right"
                          data-rtl="No"
                          data-show-tooltip="false"
                          className="inline-flex flex-col justify-start items-center"
                        >
                          <div className="w-4 h-4 relative overflow-hidden">
                            {infoIcon()}
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch inline-flex justify-between items-center">
                          <input
                            type="password"
                            placeholder="Enter your password"
                            className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal outline-none"
                          />
                          <div className="w-6 h-6 relative overflow-hidden">
                            {eyeIcon()}
                          </div>
                        </div>
                        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey" />
                      </div>
                    </div>
                    <div
                      data-breakpoint="Desktop"
                      data-color="White BG"
                      data-right-icon="true"
                      data-rtl="No"
                      data-show-tooltip="false"
                      data-type="Default"
                      className="flex-1 inline-flex flex-col justify-start items-start gap-3"
                    >
                      <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                        <div className="flex-1 justify-start">
                          <span className="text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                            Confirm Password
                          </span>
                          <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                            *
                          </span>
                        </div>
                        <div
                          data-property-1="Right"
                          data-rtl="No"
                          data-show-tooltip="false"
                          className="inline-flex flex-col justify-start items-center"
                        >
                          <div className="w-4 h-4 relative overflow-hidden">
                            {infoIcon()}
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex flex-col justify-start items-start gap-2">
                        <div className="self-stretch inline-flex justify-between items-center">
                          <input
                            type="password"
                            placeholder="Re-enter your password"
                            className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal outline-none"
                          />
                          <div className="w-6 h-6 relative overflow-hidden">
                            {eyeIcon()}
                          </div>
                        </div>
                        <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch p-3 bg-Background-Grey outline outline-1 outline-offset-[-1px] outline-Stroke-Grey flex flex-col justify-start items-start gap-3">
                    <div className="self-stretch justify-start text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                      Your Password Must Contain
                    </div>
                    <div className="self-stretch inline-flex justify-start items-start gap-2">
                      <div className="inline-flex flex-col justify-start items-start gap-2">
                        <div className="w-72 h-5 inline-flex justify-start items-center gap-2">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              className="round-checkbox appearance-none h-4 w-4 border-2 border-gray-400 rounded-full checked:bg-green-500 transition duration-200"
                            />
                          </label>
                          <div className="justify-center text-Typography-Black text-sm font-normal font-['GT_America'] leading-tight">
                            Minimum of 8 characters
                          </div>
                        </div>
                        <div className="w-72 h-5 inline-flex justify-start items-center gap-2">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              className="round-checkbox appearance-none h-4 w-4 border-2 border-gray-400 rounded-full checked:bg-green-500 transition duration-200"
                            />
                          </label>
                          <div className="justify-center text-Typography-Black text-sm font-normal font-['GT_America'] leading-tight">
                            Lower & uppercase letters
                          </div>
                        </div>
                      </div>
                      <div className="inline-flex flex-col justify-start items-start gap-2">
                        <div className="w-72 h-5 inline-flex justify-start items-center gap-2">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              className="round-checkbox appearance-none h-4 w-4 border-2 border-gray-400 rounded-full checked:bg-green-500 transition duration-200"
                            />
                          </label>
                          <div className="justify-center text-Typography-Black text-sm font-normal font-['GT_America'] leading-tight">
                            At least 1 number{" "}
                          </div>
                        </div>
                        <div className="w-72 h-5 inline-flex justify-start items-center gap-2">
                          <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                              type="checkbox"
                              className="round-checkbox appearance-none h-4 w-4 border-2 border-gray-400 rounded-full checked:bg-green-500 transition duration-200"
                            />
                          </label>
                          <div className="justify-center text-Typography-Black text-sm font-normal font-['GT_America'] leading-tight">
                            At least 1 special characters
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start gap-7">
              <div className="inline-flex justify-start items-center gap-2">
                <div
                  data-checked="yes"
                  className="w-5 h-5 relative overflow-hidden"
                >
                  <input
                    type="checkbox"
                    className="appearance-none h-5 w-5 border-2 agree-terms border-gray-400 transition duration-200 checked:bg-Background-Brand-2"
                  />
                </div>
                <div className="text-right justify-start text-Text-text-primary text-base font-normal font-['GT_America'] leading-tight">
                  Agree with terms and conditions, marketing content
                </div>
              </div>
              <div
                data-icon-placeholder="true"
                data-rtl="No"
                data-size="lg"
                data-state="Default 1"
                onClick={() => setOpenModal(true)}
                data-type="Primary"
                className="outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 inline-flex justify-start items-center cursor-pointer" 
              >
                <div className="h-12 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5 overflow-hidden">
                    <div
                    className="text-center justify-start text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight"
                    >
                    sign up
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
      </div>
      <AlertPopup openModel={openModel} setOpenModal={setOpenModal} />
    </>
  );
};
export default Signup;
