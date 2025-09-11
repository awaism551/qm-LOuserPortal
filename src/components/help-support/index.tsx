import React from "react";
const LazySupportRequest = React.lazy(() => import("./Support"));

export default function SupportRequest(): React.JSX.Element {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazySupportRequest />
    </React.Suspense>
  );
}