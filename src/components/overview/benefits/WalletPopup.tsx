import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { cancelButton } from "@/icons/icons";
import Image from "next/image";

type WalletPopupProps = {
  openModel: boolean;
  setOpenModal: (open: boolean) => void;
};

const WalletPopup = ({ openModel, setOpenModal }: WalletPopupProps) => {
  const [selectedWallet, setSelectedWallet] = useState<string>("");

  // Helper function to get background color based on selected wallet
  const getWalletBgColor = (wallet: string) => {
    return selectedWallet === wallet
      ? "bg-Background-Brand-1"
      : "bg-Background-White";
  };
  const getWalletOutlineColor = (wallet: string) => {
    return selectedWallet === wallet
      ? "outline-Stroke-Brand"
      : "outline-Stroke-Grey";
  };
  return (
    <AlertDialog open={openModel} onOpenChange={setOpenModal}>
      <AlertDialogTitle> </AlertDialogTitle>
      <AlertDialogContent className="max w-full p-3">
        <AlertDialogCancel asChild>
          <button className="absolute right-2 top-2 border-none p-1 text-gray-500 hover:text-gray-900 focus:outline-none z-10">
            {cancelButton()}
          </button>
        </AlertDialogCancel>{" "}
        {/* remove padding so bg covers edge-to-edge */}
        <div className="w-[505px] p-7 relative bg-Background-White inline-flex flex-col justify-start items-start gap-7">
          <div className="self-stretch flex flex-col justify-start items-start gap-6">
            <div className="self-stretch justify-start text-Typography-Black text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
              Pick a Wallet to Continue
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-3">
              <div
                data-breakpoint="Desktop"
                data-rtl="No"
                data-type="Default"
                className={`w-full h-16 p-5 ${getWalletBgColor(
                  "apple"
                )} outline outline-1 outline-offset-[-1px] ${getWalletOutlineColor(
                  "apple"
                )} inline-flex justify-between items-center overflow-hidden`}
              >
                <div className="flex justify-start items-center gap-3">
                  <div data-property-1="Apple" className="w-9 h-9 relative">
                    <Image
                      className="w-9 h-7 left-0 top-[4px] absolute"
                      src="/images/apple.png"
                      width={36}
                      height={27}
                      alt="Apple Logo"
                    />
                  </div>
                  <div className="text-center justify-start text-Typography-Black text-lg font-medium font-['GT_America'] leading-normal">
                    Apple Wallet
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    name="wallet"
                    value="apple"
                    checked={selectedWallet === "apple"}
                    onChange={() => setSelectedWallet("apple")}
                    className="round-checkbox appearance-none w-5 h-5 left-[2px] top-[2px] border-2 border-gray-400 rounded-full checked:bg-brand-main checked:border-0 checked:top-[0px] checked:w-5 checked:h-5"
                  />
                </div>
              </div>
              <div
                data-breakpoint="Desktop"
                data-rtl="No"
                data-type="Selected"
                className={`w-full h-16 p-5 ${getWalletBgColor(
                  "google"
                )} outline outline-1 outline-offset-[-1px] ${getWalletOutlineColor(
                  "google"
                )} inline-flex justify-between items-center overflow-hidden`}
              >
                <div className="flex justify-start items-center gap-3">
                  <div data-property-1="Google" className="w-9 h-9 relative">
                    <Image
                      className="w-9 h-7 left-0 top-[4px] absolute"
                      src="/images/google.png"
                      width={36}
                      height={27}
                      alt="Google Logo"
                    />
                  </div>
                  <div className="text-center justify-start text-Typography-Black text-lg font-medium font-['GT_America'] leading-normal">
                    Google Wallet
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    name="wallet"
                    value="google"
                    checked={selectedWallet === "google"}
                    onChange={() => setSelectedWallet("google")}
                    className="round-checkbox appearance-none w-5 h-5 left-[2px] top-[2px] border-2 border-gray-400 rounded-full checked:bg-brand-main checked:border-0 checked:top-[0px] checked:w-5 checked:h-5"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            data-icon-placeholder="false"
            data-rtl="No"
            data-size="sm"
            data-state="Default 1"
            data-type="Primary"
            className="self-stretch h-10 outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 inline-flex justify-start items-center"
          >
            <div className="flex-1 h-10 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5 overflow-hidden">
              <div className="text-center justify-start text-white text-sm font-normal font-['GT_America'] uppercase leading-tight tracking-wide">
                continue
              </div>
            </div>
          </div>
          <div className="w-6 h-6 left-[465px] top-[16px] absolute overflow-hidden">
            <div className="w-4 h-4 left-[3px] top-[3px] absolute overflow-hidden" />
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default WalletPopup;
