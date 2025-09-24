"use client";

import React, { useState } from "react";
import { countryDialCodes } from "@/app/context/EventLists";

const AccountDetails: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("password");
  return (
    <>
      <div className="w-full flex flex-col gap-10">
        <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
          <div className="w-full md:w-96 text-Typography-White text-xl font-medium font-['GT_America'] leading-normal">
            Personal Information
          </div>
          <div className="flex-1 flex flex-col gap-6 w-full">
            {/* First Name */}
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-typography-white-64 text-sm font-medium font-['GT_America'] leading-tight">
                  First Name{" "}
                </span>
                <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                  *
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none outline-none text-typography-white-64 text-lg font-normal font-['GT_America'] leading-normal"
                    value={firstName}
                    placeholder="Enter your first name"
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="h-0 outline outline-1 outline-offset-[-0.5px] outline-Stroke-White-20%/20" />
              </div>
            </div>
            {/* Middle Name */}
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-typography-white-64 text-sm font-medium font-['GT_America'] leading-tight">
                  Middle Name{" "}
                </span>
                <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                  *
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none outline-none text-typography-white-64 text-lg font-normal font-['GT_America'] leading-normal"
                    value={middleName}
                    placeholder="Enter your middle name"
                    required
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>
                <div className="h-0 outline outline-1 outline-offset-[-0.5px] outline-Stroke-White-20%/20" />
              </div>
            </div>
            {/* Last Name */}
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-typography-white-64 text-sm font-medium font-['GT_America'] leading-tight">
                  Last Name{" "}
                </span>
                <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                  *
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input
                    type="text"
                    className="flex-1 bg-transparent border-none outline-none text-typography-white-64 text-lg font-normal font-['GT_America'] leading-normal"
                    value={lastName}
                    required
                    placeholder="Enter your last name"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="h-0 outline outline-1 outline-offset-[-0.5px] outline-Stroke-White-20%/20" />
              </div>
            </div>
            {/* Email */}
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-typography-white-64 text-sm font-medium font-['GT_America'] leading-tight">
                  Email Address{" "}
                </span>
                <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                  *
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <input
                    type="email"
                    className="flex-1 bg-transparent border-none outline-none text-typography-white-64 text-lg font-normal font-['GT_America'] leading-normal"
                    value={email}
                    required
                    placeholder="Enter your email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="h-0 outline outline-1 outline-offset-[-0.5px] outline-Stroke-White-20%/20" />
              </div>
            </div>
            {/* Mobile Number */}
            <div className="flex flex-col gap-3">
              <div>
                <span className="text-typography-white-64 text-sm font-medium font-['GT_America'] leading-tight">
                  Mobile Number{" "}
                </span>
                <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                  *
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="w-full sm:w-24 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div
                      data-flag-type="US"
                      className="w-5 h-5 relative overflow-hidden"
                    >
                      <div className="w-5 h-2.5 left-0 top-[5px] absolute bg-white" />
                      <div className="w-5 h-3 left-0 top-[4px] absolute bg-rose-700" />
                      <div className="w-2 h-1.5 left-0 top-[4px] absolute bg-blue-950" />
                      <div className="w-2 h-1.5 left-[0.46px] top-[4.32px] absolute bg-white" />
                    </div>
                    <div className="flex-1"></div>
                    <select className="bg-transparent border-none outline-none text-typography-white-64 text-lg font-normal font-['GT_America'] leading-normal">
                      {countryDialCodes.map((code) => (
                        <option key={code.code} value={code.code}>
                          {code.code}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-5 h-5 relative overflow-hidden"></div>
                  <div className="w-2.5 h-[5px] left-[5px] top-[7.5px] absolute outline outline-[1.5px] outline-offset-[-0.75px] outline-Iconography-Grey-300" />
                </div>
              </div>
              <div className="h-0 outline outline-1 outline-offset-[-0.5px] outline-Stroke-White-20%/20" />
            </div>
            <div className="flex-1 flex flex-col gap-2">
              <div className="flex items-center">
                <input
                  type="tel"
                  className="flex-1 bg-transparent border-none outline-none text-typography-white-64 text-lg font-normal font-['GT_America'] leading-normal"
                  value={mobileNumber}
                  required
                  placeholder="Enter your mobile number"
                  onChange={(e) => setMobileNumber(e.target.value)}
                />
              </div>
              <div className="h-0 outline outline-1 outline-offset-[-0.5px] outline-Stroke-White-20%/20" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-0 outline outline-1 outline-offset-[-0.5px] outline-Stroke-White-20%/20"></div>
      <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
        <div className="w-full md:w-96 text-Typography-White text-xl font-medium font-['GT_America'] leading-normal">
          Password
        </div>
        <div className="flex-1 flex flex-col gap-7 w-full">
          <div className="flex flex-col gap-3">
            <div className="text-typography-white-64 text-sm font-medium font-['GT_America'] leading-tight">
              Current Password
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center">
                <input
                  type="password"
                  className="flex-1 bg-transparent border-none outline-none text-typography-white-64 text-lg font-normal font-['GT_America'] leading-normal"
                  value={password}
                  required
                  placeholder="Enter your current password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="h-0 outline outline-1 outline-offset-[-0.5px] outline-Stroke-White-20%/20" />
            </div>
          </div>
          <div className="outline outline-1 outline-offset-[-1px] outline-Stroke-White inline-flex justify-start items-center"></div>
          <div className="h-11 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-Grey-100 flex justify-center items-center gap-2.5 overflow-hidden">
            <div className="text-center text-white text-Button-Background-Text-White text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
              change password
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
