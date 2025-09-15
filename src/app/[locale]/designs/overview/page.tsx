import React from 'react';
import OverviewList from '@/components/overview/';



export default function Page(): React.JSX.Element {
  return (
     <div className="w-full px-7 pt-7 pb-10 bg-Background-Medjool inline-flex flex-col justify-start items-start gap-14 overflow-hidden">
         <OverviewList />
     </div> 
  );
}