'use client';
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const LeftsideSection = () => {
  const pathname = usePathname();
  const imageSrc = pathname?.includes("forget-password")
    ? "/images/forget.png"
    : "/images/leftside.png";

  return (
    <>
      <div className="pl-5 py-5 inline-flex justify-start items-center gap-2.5">
        {/* <div className="w-[700px] h-[920px] relative bg-black/10" /> */}
        
        <Image
          src={imageSrc}
          alt="login-signup-leftside"
          width={700}
          height={920}
        />
      </div>
    </>
  );
};

export default LeftsideSection;
