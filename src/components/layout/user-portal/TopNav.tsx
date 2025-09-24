"use client";
import React, { use, useState } from "react";
import { searchIcon, bellIcon, cartIcon } from "@/icons/icons";
import { usePathname, useRouter } from "next/navigation";



export default function TopNav() {
  const [SearchValue, setSearchValue] = useState("");
  const pathname = usePathname();
  const router = useRouter();

  const currentLocale = (pathname?.split("/")[1] || "en") as "en" | "ar";

  const replaceLocaleInPath = (path: string | null, nextLocale: "en" | "ar") => {
    if (!path) return `/${nextLocale}/designs/overview`;
    const parts = path.split("/");
    if (parts.length > 1 && parts[1]) {
      parts[1] = nextLocale;
      return parts.join("/") || `/${nextLocale}/designs/overview`;
    }
    return `/${nextLocale}${path.startsWith("/") ? path : `/${path}`}`;
  };

  const onLocaleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = (e.target.value as "en" | "ar");
    const nextPath = replaceLocaleInPath(pathname, nextLocale);
    router.push(nextPath);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <>
      <div className="w-full bg-page-main">
        <div
          data-color="Purple"
          className="w-full self-stretch h-20 px-7 py-5 bg-Background-Medjool shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)] border-b border-Stroke-White-20%/20 flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4"
        >
          {/* Left: Search Bar */}
          <div className="w-full sm:flex-1 min-w-[120px] max-w-md">
            <div
              data-type="Default"
              className="w-full h-10 p-3 bg-Button-Background-Blur-20%/20 outline outline-1 outline-offset-[-1px] outline-Stroke-White-56%/60 flex items-center gap-2 overflow-hidden"
            >
              <div className="w-4 h-4 relative">{searchIcon()}</div>
              <div className="flex-1">
                <input
                  className="w-full h-full bg-transparent placeholder:text-Typography-White focus:outline-none text-sm"
                  placeholder="Search by keyword"
                  type="text"
                  onChange={handleSearchChange}
                  value={SearchValue}
                />
              </div>
            </div>
          </div>
          {/* Right: Icons & Profile */}
          <div className="flex items-center gap-3 sm:gap-5 flex-shrink-0 justify-end ">
            <button
              onClick={() => {
                const nextLocale = currentLocale === "en" ? "ar" : "en";
                const nextPath = replaceLocaleInPath(pathname, nextLocale);
                router.push(nextPath);
              }}
              className="justify-start text-Typography-White text-base font-medium font-['IBM_Plex_Sans_Arabic'] leading-relaxed cursor-pointer hover:opacity-80 transition-opacity bg-transparent border-none outline-none"
            >
              {currentLocale === "en" ? "العربية" : "English"}
            </button>
            <div className="w-6 h-6 relative">{bellIcon()}</div>
            <div className="w-6 h-6 relative">{cartIcon()}</div>
            <div className="flex items-center gap-2 sm:gap-3">
              <img
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover"
                src="https://placehold.co/38x38"
                alt="Profile"
              />
              <div className="hidden xs:inline-flex sm:inline-flex flex-col items-start gap-1">
                <div className="text-Typography-White text-sm sm:text-base font-medium font-['GT_America'] leading-tight">
                  Md Ashiqul Islam
                </div>
                <div className="inline-flex items-center gap-1.5">
                  <div className="text-Typography-white-64 text-xs font-normal font-['GT_America'] leading-none">
                    Guest
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
