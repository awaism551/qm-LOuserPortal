"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { userMenu } from "./Menu";
import { logout } from "@/icons/icons";

export default function SidebarMenu() {
  const [sideMenu, setSideMenu] = useState("");
  const pathname = usePathname();
  const currentLocale = pathname?.split("/")[1] || "en";
  const getSideMenu = (menu: string) => {
    return sideMenu === menu ? "bg-Background-Brand-2" : "";
  };
  const getIconColor = (menu: string) => (sideMenu === menu ? "#fff" : "#000");
  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("overview")) setSideMenu("overview");
    else if (path.includes("accounts-benefits")) setSideMenu("account");
    else if (path.includes("events-program")) setSideMenu("events");
    else if (path.includes("help-support")) setSideMenu("help");
  }, []);
  return (
    <>
      <div
        data-type="White"
        className="fixed top-0 left-0 w-72 h-full pb-3 bg-white border-r border-Stroke-Grey inline-flex flex-col justify-between items-start z-50"
      >
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch px-6 py-5 border-b border-Stroke-Grey flex flex-col justify-start items-start gap-2.5">
            <div className="w-28 h-9">
              <Image
                src="/images/logo.png"
                alt="Learning Outreach Logo"
                width={112}
                height={36}
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            {userMenu.map((menu) => (
              <Link
                key={menu.id}
                href={menu.href}
                className="w-full"
                onClick={() => setSideMenu(menu.name)}
              >
                <div
                  data-breakpoint="Desktop"
                  data-property-1={
                    sideMenu === menu.name ? "Final Selected" : "Final Default"
                  }
                  className={`w-full self-stretch h-10 px-5 py-2.5 ${getSideMenu(
                    menu.name
                  )} inline-flex justify-start items-center gap-2.5`}
                >
                  <div className="w-4 h-5 relative">
                    {menu.icon(getIconColor(menu.name))}
                  </div>
                  <div
                    className={`flex-1 justify-start text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight ${
                      sideMenu === menu.name
                        ? "text-Typography-White"
                        : "text-Typography-Black"
                    }`}
                  >
                    {menu.title}
                  </div>
                </div>
              </Link>
            ))}
            {/* <Link
          href="/en/designs/overview"
          className="w-full"
          onClick={() => setSideMenu("overview")}
        >
          <div
            data-breakpoint="Desktop"
            data-property-1={
          sideMenu === "overview" ? "Final Selected" : "Final Default"
            }
            className={`w-full self-stretch h-10 px-5 py-2.5 ${getSideMenu(
          "overview"
            )} inline-flex justify-start items-center gap-2.5`}
          >
            <div className="w-4 h-5 relative">
          {homeIcon(getIconColor("overview"))}
            </div>
            <div
          className={`flex-1 justify-start text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight ${
            sideMenu === "overview"
              ? "text-Typography-White"
              : "text-Typography-Black"
          }`}
            >
          Overview
            </div>
          </div>
        </Link> */}
            {/* <Link
          href="/en/designs/accounts-benefits"
          className="w-full"
          onClick={() => setSideMenu("account")}
        >
          <div
            data-breakpoint="Desktop"
            data-property-1={
          sideMenu === "account" ? "Final Selected" : "Final Default"
            }
            className={`w-full self-stretch h-10 px-5 py-2.5 ${getSideMenu(
          "account"
            )} inline-flex justify-start items-center gap-2.5`}
          >
            <div className="w-4 h-5 relative">
          {accountIcon(getIconColor("account"))}
            </div>
            <div
          className={`flex-1 justify-start text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight ${
            sideMenu === "account"
              ? "text-Typography-White"
              : "text-Typography-Black"
          }`}
            >
          Account & Benefits
            </div>
          </div>
        </Link> */}
            {/* <Link
          href="/en/designs/events-program"
          className="w-full"
          onClick={() => setSideMenu("events")}
        >
          <div
            data-breakpoint="Desktop"
            data-property-1={
          sideMenu === "events" ? "Final Selected" : "Final Default"
            }
            className={`w-full self-stretch h-10 px-5 py-2.5 ${getSideMenu(
          "events"
            )} inline-flex justify-start items-center gap-2.5`}
          >
            <div className="w-4 h-5 relative">
          {eventsIcon(getIconColor("events"))}
            </div>
            <div
          className={`flex-1 justify-start text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight ${
            sideMenu === "events"
              ? "text-Typography-White"
              : "text-Typography-Black"
          }`}
            >
          Events & Programs
            </div>
          </div>
        </Link>
        <Link
          href="/en/designs/help-support"
          className="w-full"
          onClick={() => setSideMenu("help")}
        >
          <div
            data-breakpoint="Desktop"
            data-property-1={
          sideMenu === "help" ? "Final Selected" : "Final Default"
            }
            className={`w-full self-stretch h-10 px-5 py-2.5 ${getSideMenu(
          "help"
            )} inline-flex justify-start items-center gap-2.5`}
          >
            <div className="w-4 h-4 relative overflow-hidden text-white">
          {helpIcon(getIconColor("help"))}
            </div>
            <div
          className={`flex-1 justify-start text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight ${
            sideMenu === "help"
              ? "text-Typography-White"
              : "text-Typography-Black"
          }`}
            >
          Help & Support
            </div>
          </div>
        </Link> */}
          </div>
        </div>
        <div
          data-breakpoint="Desktop"
          data-property-1="Final Default"
          className="self-stretch h-10 px-5 py-2.5 inline-flex justify-start items-center gap-2.5"
        >
          <div className="w-4 h-4 relative">{logout()}</div>
          <div className="flex-1 justify-start text-Typography-Black text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
            log out
          </div>
        </div>
      </div>
    </>
  );
}
