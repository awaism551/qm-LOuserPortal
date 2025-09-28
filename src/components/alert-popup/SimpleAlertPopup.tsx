import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cancelButton, paymentIcon } from "@/icons/icons";
import Link from "next/link";

import React, { useState } from "react";

interface SimpleAlertPopupProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    content: {
        icon: React.ReactNode;
        Heading: string;
        Description?: string;
        buttonText: string;
        buttonURL: string;
    }
  }
  
  const SimpleAlertPopup: React.FC<SimpleAlertPopupProps> = ({ open, onOpenChange, content }) => {

  return (
    <>
      <AlertDialog open={open} onOpenChange={onOpenChange}>
        <AlertDialogTrigger asChild>
          <button style={{ display: "none" }} />
        </AlertDialogTrigger>
        <AlertDialogTitle></AlertDialogTitle>
        <AlertDialogContent>
          <div className="p-10 relative bg-Background-White inline-flex flex-col justify-start items-center gap-9">
            <div className="flex flex-col justify-start items-center gap-5">
              <div className="w-11 h-11 relative">{content.icon}</div>
              <div className="w-96 flex flex-col justify-start items-center gap-2">
                <div className="self-stretch text-center justify-start text-Typography-Black text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
                    {content.Heading}
                </div>
                <div className="self-stretch text-center justify-start">
                    <div dangerouslySetInnerHTML={{ __html: content.Description ?? "" }} />
                </div>
              </div>
            </div>
            <Link href={content.buttonURL} className="flex-1">
            <div className="inline-flex justify-start items-center gap-4">
              <div
                data-icon-placeholder="false"
                data-size="sm"
                data-state="Default 1"
                data-type="Primary"
                className="outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 flex justify-start items-center"
              >
                <div className="h-10 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5 overflow-hidden">
                  <div className="text-center justify-start text-white text-sm font-normal font-['GT_America'] uppercase leading-tight tracking-wide">
                   {content.buttonText}
                  </div>
                </div>
              </div>
            
            </div>
            </Link>  
          </div>
          <AlertDialogCancel asChild>
            <button className="absolute border-none right-4 top-4 p-1 text-gray-500 hover:text-gray-900 focus:outline-none">
              {cancelButton()}
            </button>
          </AlertDialogCancel>
          <AlertDialogHeader>
            <AlertDialogDescription></AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default SimpleAlertPopup;
