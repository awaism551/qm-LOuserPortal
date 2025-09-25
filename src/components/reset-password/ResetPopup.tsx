import { cancelButton, rightArrowIcon } from "@/icons/icons";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

type ResetPopupProps = {
  openModel: boolean;
  setOpenModal: (open: boolean) => void;
  mail?: string;
};

const ResetPopup = ({ openModel, setOpenModal, mail }: ResetPopupProps) => {
  return (
    <AlertDialog open={openModel} onOpenChange={setOpenModal}>
      <AlertDialogTitle> </AlertDialogTitle>
      <AlertDialogContent className="w-full p-3">
        <AlertDialogCancel asChild>
          <button className="absolute right-2 top-2 border-none p-1 text-gray-500 hover:text-gray-900 focus:outline-none z-10">
            {cancelButton()}
          </button>
        </AlertDialogCancel>{" "}
        {/* remove padding so bg covers edge-to-edge */}
        <div className="w-full h-80 p-3 bg-Background-bg-primary inline-flex justify-start items-center">
          <div className="flex-1 self-stretch p-8 inline-flex flex-col justify-center items-center gap-10">
            <div className="self-stretch flex flex-col justify-start items-center gap-2.5">
              <div className="self-stretch text-center justify-start text-Text-text-primary text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
                Your password reset successfully
              </div>
            </div>
            <div className="inline-flex justify-center items-start gap-5">
              <Link href={`login`} className="flex-1">
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
                      log in
                    </div>
                  </div>
                  <div className="w-12 h-12 px-3.5 py-3 bg-Button-Background-Default border-l border-Stroke-White-56%/60 flex justify-center items-center gap-2.5 overflow-hidden">
                    <div className="w-6 relative overflow-hidden">
                      {rightArrowIcon()}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ResetPopup;
