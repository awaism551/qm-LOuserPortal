import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,

} from "@/components/ui/alert-dialog";
import { cancelButton, rightArrowIcon } from "@/icons/icons";
import Image from "next/image";

type AlertPopupProps = {
  openModel: boolean;
  setOpenModal: (open: boolean) => void;
};

const AlertPopup = ({ openModel, setOpenModal }: AlertPopupProps) => {
  return (
    <AlertDialog open={openModel} onOpenChange={setOpenModal}>
       <AlertDialogTitle>   </AlertDialogTitle>
      <AlertDialogContent className="max-w-3xl w-full p-3 sm:max-w-3xl md:max-w-3xl">
      <AlertDialogCancel asChild>
                  <button className="absolute border-none right-0 top-0 p-1 text-gray-500 hover:text-gray-900 focus:outline-none">
                    {cancelButton()}
                  </button>
                </AlertDialogCancel>
        {" "}
        {/* remove padding so bg covers edge-to-edge */}
        <div className="flex w-full h-full bg-Background-bg-primary rounded-lg overflow-hidden">
          {/* Left side: image */}
          <Image
            className="w-96 h-[476px] object-cover"
            src="/images/leftside.png"
            width={358}
            height={476}

            alt="placeholder"
          />

          {/* Right side: content */}
          <div className="self-stretch self-stretch p-8 inline-flex flex-col justify-center items-center gap-10">
            <div className="self-stretch text-center justify-start text-Text-text-primary text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
              Your account created successfully
            </div>
            <div
              data-icon-placeholder="true"
              data-rtl="No"
              data-size="lg"
              data-state="Default 1"
              data-type="Primary"
              className="outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 inline-flex justify-start items-center"
            >
              <div className="h-12 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="text-center justify-start text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
                  go to dashboard
                </div>
              </div>
              <div className="w-12 h-12 px-3.5 py-3 bg-Button-Background-Default border-l border-Stroke-White-56%/60 flex justify-center items-center gap-2.5 overflow-hidden">
                <div className="w-6 relative overflow-hidden">
                  {rightArrowIcon()}
                  {/* <div className="w-1.5 h-3 left-[9px] top-[6px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Button-Background-Icon-White" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertPopup;
