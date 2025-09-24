import React from "react";
import {
    homeIcon,
    accountIcon,
    eventsIcon,
    helpIcon,
  } from "@/icons/icons";

export const userMenu = [
  {
    id: 1,
    title: "Overview",
    name:'overview',
    icon:  homeIcon,
    href: "/en/designs/overview",
  },
  {
    id: 2,
    title: "Account & Benefits",
    name:'account',
    icon:  accountIcon,
    href: "/en/designs/accounts-benefits",
  },
  {
    id: 3,
    title: "Events & Programs",
    name:'events',
    icon:  eventsIcon,
    href: "/en/designs/events-program",
  },
  {
    id: 4,
    title: "Help & Support",
    name:'help',
    icon: helpIcon,
    href: "/en/designs/help-support",
  },
]; 