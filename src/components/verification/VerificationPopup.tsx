import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
} from "@/components/ui/alert-dialog";
import { cancelButton, rightArrowIcon } from "@/icons/icons";
import { AlertDialogTitle } from "@radix-ui/react-alert-dialog";
import Link from "next/link";

type ForgetPopupProps = {
  openModel: boolean;
  setOpenModal: (open: boolean) => void;
  mail?: string;
};

const VerificationPopup = ({
  openModel,
  setOpenModal,
  mail,
}: ForgetPopupProps) => {
  return (
    <>
      <AlertDialog open={openModel} onOpenChange={setOpenModal}>
        <AlertDialogTitle> </AlertDialogTitle>
        <AlertDialogContent className="max-w-2xl w-full p-3 sm:max-w-2xl md:max-w-2xl">
          <AlertDialogCancel asChild>
            <button className="absolute right-2 top-2 border-none p-1 text-gray-500 hover:text-gray-900 focus:outline-none z-10">
              {cancelButton()}
            </button>
          </AlertDialogCancel>{" "}
          {/* remove padding so bg covers edge-to-edge */}
          <div className="w-full h-80 p-3 relative bg-Background-bg-primary inline-flex justify-start items-center">
            <div className="flex-1 self-stretch p-8 inline-flex flex-col justify-center items-center gap-10">
              <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
                <div className="self-stretch text-center justify-start text-Text-text-primary text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
                  Password link sent
                </div>
                <div className="justify-start text-Typography-Grey-500 text-base font-normal font-['GT_America'] leading-tight">
                  Please check your inbox {mail ? `${mail}` : ""}.
                </div>
              </div>
              <div className="inline-flex justify-center items-start gap-5">
                <div
                  data-icon-placeholder="true"
                  data-rtl="No"
                  data-size="lg"
                  data-state="Default 1"
                  data-type="Secondary"
                  className="outline outline-1 outline-offset-[-1px] outline-Stroke-White flex justify-start items-center"
                >
                  <div className="h-12 px-5 py-3 outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-Grey-100 flex justify-center items-center gap-2.5 overflow-hidden">
                    <div className="text-center justify-start text-Button-Background-Text-Black text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
                      Go to homepage
                    </div>
                  </div>
                  <div className="w-12 h-12 px-3.5 py-3 border-r border-t border-b border-Button-Background-Stroke-Grey-100 flex justify-center items-center gap-2.5 overflow-hidden">
                    <div className="w-6 relative overflow-hidden">
                      {rightArrowIcon("black")}
                      {/* <div className="w-1.5 h-3 left-[9px] top-[6px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Button-Background-Icon-Black" /> */}
                    </div>
                  </div>
                </div>
                <Link href={`mailto:${mail ?? ""}`} className="flex-1">
                  <div
                    data-icon-placeholder="true"
                    data-rtl="No"
                    data-size="lg"
                    data-state="Default 1"
                    data-type="Primary"
                    className="outline outline-1 outline-offset-[-1px] outline-Button-Background-Stroke-56%/60 flex justify-start items-center"
                  >
                    <div className="h-12 px-5 py-3 bg-Button-Background-Default flex justify-center items-center gap-2.5 overflow-hidden">
                      <div className="text-center justify-start text-white text-base font-normal font-['GT_America'] uppercase leading-normal tracking-tight">
                        Open email
                      </div>
                    </div>
                    <div className="w-12 h-12 px-3.5 py-3 bg-Button-Background-Default border-l border-Stroke-White-56%/60 flex justify-center items-center gap-2.5 overflow-hidden">
                      <div className="w-6 relative overflow-hidden">
                        {rightArrowIcon()}
                        {/* <div className="w-1.5 h-3 left-[9px] top-[6px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-Button-Background-Icon-White" /> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default VerificationPopup;
