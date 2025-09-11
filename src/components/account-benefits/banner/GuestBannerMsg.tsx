import React from "react";


const GuestBannerMsg = () => {

  return (
   <> 
      <div
        data-breakpoint="Desktop"
        data-color="Purple BG"
        data-type="Default"
        className="self-stretch bg-Background-Brand-2 inline-flex flex-col justify-start items-start gap-14 overflow-hidden"
      >
        <div className="w-full h-60 bg-rose-500 p-8">
          <div className="self-stretch inline-flex flex-col justify-start items-start gap-7">
            <div className="self-stretch inline-flex justify-between items-start">
              <div className="flex justify-start items-end gap-3">
                <img
                  data-status="Already Uploded"
                  className="w-16 h-16 relative"
                  src="https://placehold.co/64x64"
                />
                <div className="w-44 inline-flex flex-col justify-start items-start gap-0.5">
                  <div className="self-stretch justify-start text-Typography-White text-base font-medium font-['GT_America'] leading-tight">
                    Md Ashiqul Islam
                  </div>
                  <div className="self-stretch justify-start text-typography-white-64 text-sm font-normal font-['GT_America'] leading-tight">
                    mdashiqulislam@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="w-96 flex flex-col justify-start items-start gap-[5px]">
              <div className="self-stretch inline-flex justify-start items-center gap-5">
                <div className="justify-start text-Typography-White text-6xl font-light font-['Lyon_Arabic_Display'] capitalize leading-[66px]">
                  Guest
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestBannerMsg;
