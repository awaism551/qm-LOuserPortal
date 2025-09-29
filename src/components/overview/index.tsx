"use client";
import React from "react";
import WelcomeMsg from '@/components/overview/welcome/WelcomeMsg';
import { publicEvent } from '@/app/context/EventLists';
import { scheduleEvent } from '@/app/context/EventLists';
import { upcomingEvent } from '@/app/context/EventLists';
const LazyPublicEvents = React.lazy(() => import("./public-events/PublicEvents"));
const LazyScheduledEvents = React.lazy(() => import("./schedule-events/ScheduleEvents"));
const LazyUpcomingEvents = React.lazy(() => import("./upcoming-events/UpcomingEvents"));
const LazyBenefits = React.lazy(() => import("./benefits/Benefits"));

type OverviewListProps = {
  isLoggedIn: boolean;
};

export default function OverviewList({ isLoggedIn }: OverviewListProps): React.JSX.Element {
  return (
    <React.Suspense fallback={<div className="flex items-center justify-center h-full text-white text-xl">Loading...</div>}>
      <WelcomeMsg />
     <LazyPublicEvents eventlists={publicEvent} />
     {isLoggedIn && <LazyBenefits />}
     <LazyScheduledEvents eventlists={scheduleEvent} />
     <LazyUpcomingEvents eventlists={upcomingEvent} />   
    </React.Suspense>
  );
}