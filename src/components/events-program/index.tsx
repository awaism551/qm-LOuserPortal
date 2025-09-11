import React from "react";
const LazyEventList = React.lazy(() => import("./EventListing"));

export default function EventList(): React.JSX.Element {
  return (
    <React.Suspense fallback={<div className="flex items-center justify-center h-full text-white text-xl">Loading...</div>}>
      <LazyEventList />
    </React.Suspense>
  );
}