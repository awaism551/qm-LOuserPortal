import { eyeIcon, infoIcon, rightArrowIcon } from "@/icons/icons";
import Link from "next/link";

const Login = () => {
  return (
    <div className="self-stretch self-stretch px-14 inline-flex flex-col justify-center items-center gap-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-14">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="w-72 justify-start text-Typography-Black text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
            Login
          </div>
          <div className="self-stretch justify-start">
            <span className="text-Text-text-primary text-base font-normal font-['GT_America'] leading-tight">
              Don’t have an account?{" "}
            </span>

            <span className="text-Typography-Brand text-base font-medium font-['GT_America'] underline leading-tight">
              <Link href="/en/login-signup/signup">Register now</Link>
            </span>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-10">
          <div className="self-stretch flex flex-col justify-start items-start gap-8">
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
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal outline-none"
                  />
                  {/* <div className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal">
                    Jane Smith
                  </div> */}
                </div>
                <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey" />
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
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
                      Password
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
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal outline-none"
                    />
                    {/* <div className="flex-1 justify-start text-Typography-Grey-500 text-lg font-normal font-['GT_America'] leading-normal">
                      Jane Smith
                    </div> */}
                    <div className="w-6 h-6 relative overflow-hidden">
                      {eyeIcon()}
                      {/* <div className="w-1.5 h-1.5 left-[9px] top-[9px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Iconography-Black" />
                      <div className="w-5 h-3.5 left-[2px] top-[5px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Iconography-Black" /> */}
                    </div>
                  </div>
                  <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-Grey" />
                </div>
              </div>
              <div className="self-stretch flex justify-end">
                <Link href={`/en/login-signup/forget-password`}>
                  <div className="text-Text-text-primary text-base font-normal font-['GT_America'] leading-tight underline cursor-pointer">
                    Forgot Password ?
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="inline-flex justify-start items-center gap-2">
            <div
              data-checked="yes"
              className="w-5 h-5 relative overflow-hidden"
            >
              <input
                type="checkbox"
                className="appearance-none h-5 w-5 border-2 agree-terms border-gray-400 transition duration-200 checked:bg-Background-Brand-2"
              />
              {/* <div className="w-3 h-2 left-[4px] top-[6px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Icon-icon-white" /> */}
            </div>
            <div className="text-right justify-start text-Text-text-primary text-base font-normal font-['GT_America'] leading-tight">
              Remember me for this device
            </div>
          </div>
          <div
            data-icon-placeholder="true"
            data-rtl="No"
            data-size="lg"
            data-state="Default 1"
            data-type="Primary"
            className="outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 inline-flex justify-start items-center"
          >
            <div className="h-12 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="text-center justify-start text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
                log in
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
  );
};
export default Login;
