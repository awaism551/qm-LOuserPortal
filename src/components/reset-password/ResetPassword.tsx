import React, { useState } from "react";
import { eyeIcon, infoIcon, rightArrowIcon } from "@/icons/icons";
import Link from "next/link";
import ResetPopup from "./ResetPopup";

const ResetPassword = () => {
  const [openModel, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const validations = [
    {
      label: "Minimum of 8 characters",
      valid: newPassword.length >= 8,
    },
    {
      label: "Lower & uppercase letters",
      valid:
        /[a-z]/.test(newPassword) &&
        /[A-Z]/.test(newPassword),
    },
    {
      label: "At least 1 number",
      valid: /\d/.test(newPassword),
    },
    {
      label: "At least 1 special characters",
      valid: /[^A-Za-z0-9]/.test(newPassword),
    },
  ];

  return (
    <>
      <div className="self-stretch self-stretch px-14 inline-flex flex-col justify-center items-center gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-14">
          <div className="self-stretch flex flex-col justify-start items-start gap-4">
            <div className="self-stretch justify-start text-Typography-Black text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
              Reset your password
            </div>
            <div className="w-96 justify-start text-Typography-Grey-500 text-base font-normal font-['GT_America'] leading-tight">
              Please enter your new password
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <div
              data-breakpoint="Desktop"
              data-color="White BG"
              data-right-icon="true"
              data-rtl="No"
              data-show-tooltip="false"
              data-type="Default"
              className="w-full h-16 flex flex-col justify-start items-start gap-3"
            >
              <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                <div className="flex-1 justify-start">
                  <span className="text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                    New Password
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
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch inline-flex justify-between items-center">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal outline-none"
                    placeholder="Enter your new password"
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
              className="w-full h-16 flex flex-col justify-start items-start gap-3"
            >
              <div className="self-stretch inline-flex justify-center items-center gap-2.5">
                <div className="flex-1 justify-start">
                  <span className="text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                    Confirm New Password
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
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch inline-flex justify-between items-center">
                  <input
                    type="password"
                    className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal outline-none"
                    placeholder="Re-enter your new password"
                  />

                  <div className="w-6 h-6 relative overflow-hidden">
                    {eyeIcon()}
                  </div>
                </div>
                <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey" />
              </div>
            </div>
            <div className="self-stretch p-3 bg-Background-Grey outline outline-1 outline-offset-[-1px] outline-Stroke-Grey flex flex-col justify-start items-start gap-3">
              <div className="self-stretch justify-start text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                Your Password Must Contain
              </div>
              <div className="self-stretch inline-flex justify-start items-start gap-2">
                {(() => {
                  return (
                    <>
                      {/* Patch the input above */}
                      <div className="inline-flex flex-col justify-start items-start gap-2">
                        {validations.slice(0, 2).map((v, i) => (
                          <div key={v.label} className="w-72 h-5 inline-flex justify-start items-center gap-2">
                            <div className="w-4 h-4 relative overflow-hidden flex items-center justify-center">
                              <svg width="16" height="16" viewBox="0 0 16 16">
                                <circle
                                  cx="8"
                                  cy="8"
                                  r="8"
                                  fill={v.valid ? "#22C55E" : "#D1D5DB"}
                                />
                                  <polyline
                                    points="4,8 7,11 12,5"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="0.9"
                                  />
                              
                              </svg>
                            </div>
                            <div className="justify-center text-Typography-Black text-sm font-normal font-['GT_America'] leading-tight">
                              {v.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="inline-flex flex-col justify-start items-start gap-2">
                        {validations.slice(2).map((v, i) => (
                          <div key={v.label} className="w-72 h-5 inline-flex justify-start items-center gap-2">
                            <div className="w-4 h-4 relative overflow-hidden flex items-center justify-center">
                              <svg width="16" height="16" viewBox="0 0 16 16">
                                <circle
                                  cx="8"
                                  cy="8"
                                  r="8"
                                  fill={v.valid ? "#22C55E" : "#D1D5DB"}
                                />
                                  <polyline
                                    points="4,8 7,11 12,5"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="0.9"
                                  />
                              </svg>
                            </div>
                            <div className="justify-center text-Typography-Black text-sm font-normal font-['GT_America'] leading-tight">
                              {v.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
          <div className="inline-flex justify-start items-start gap-5">
            <Link href="login">
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
              data-state="Default 1"
              onClick={() => setOpenModal(true)}
              data-type="Primary"
              className="outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 flex justify-start items-center cursor-pointer"
            >
              <div className="h-12 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="text-center justify-start text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
                  Confirm
                </div>
              </div>
              <div className="w-12 h-12 px-3.5 py-3 bg-Button-Background-Default border-l border-Stroke-White-56%/60 flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-6  relative overflow-hidden">
                  {rightArrowIcon("white")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResetPopup
        openModel={openModel}
        setOpenModal={setOpenModal}
        mail={email}
      />
    </>
  );
};

export default ResetPassword;
