import React from "react";
import OrderSummary from "@/components/ui/OrderSummery";
import { cancelButton, paymentIcon } from "@/icons/icons";
import CheckoutHeader from "@/components/account-benefits/breadcrumb/CheckoutHeader";
import CheckoutBreadcrum from "@/components/account-benefits/breadcrumb/CheckoutBreadcrumb";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const CartDetails = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [open, setOpen] = React.useState(false);
  return (
    <div className="w-full bg-Background-Medjool inline-flex flex-col justify-start items-start gap-7 overflow-hidden">
      <CheckoutHeader />
      <div className="self-stretch self-stretch px-7 pt-5 pb-10 bg-Background-Medjool inline-flex flex-col justify-start items-start gap-5">
        <CheckoutBreadcrum />
        <div className="self-stretch inline-flex flex-col justify-start items-start gap-7">
          <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20"></div>
          <div className="self-stretch inline-flex justify-start items-start gap-6">
            <div className="w-2/3 inline-flex flex-col justify-center items-start gap-6">
              <div className="w-full inline-flex flex-col justify-start items-start gap-10">
                <div className="self-stretch flex flex-col justify-start items-start gap-5">
                  <div className="inline-flex justify-start items-center gap-2.5">
                    <div className="justify-start text-Typography-White text-lg font-medium font-['GT_America'] leading-normal">
                      Personal Details
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col justify-start items-start gap-5">
                    <div className="self-stretch flex flex-col justify-start items-start gap-7">
                      <div
                        data-breakpoint="Desktop"
                        data-color="Purple BG"
                        data-right-icon="false"
                        data-type="Default"
                        className="self-stretch flex flex-col justify-start items-start gap-3"
                      >
                        <div className="self-stretch justify-start">
                          <span className="text-Typography-White-64 text-sm font-medium font-['GT_America'] leading-tight">
                            First Name
                          </span>
                          <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                            *
                          </span>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-2">
                          <div className="self-stretch inline-flex justify-between items-center">
                            <input
                              type="text"
                              className="flex-1 bg-transparent border-none outline-none text-Typography-White-64 text-lg font-normal font-['GT_America'] leading-normal"
                              placeholder="First Name"
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                          <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20" />
                        </div>
                      </div>
                      <div
                        data-breakpoint="Desktop"
                        data-color="Purple BG"
                        data-right-icon="false"
                        data-type="Default"
                        className="self-stretch flex flex-col justify-start items-start gap-3"
                      >
                        <div className="self-stretch justify-start">
                          <span className="text-Typography-White-64 text-sm font-medium font-['GT_America'] leading-tight">
                            Last Name
                          </span>
                          <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                            *
                          </span>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-2">
                          <div className="self-stretch inline-flex justify-between items-center">
                            <input
                              type="text"
                              className="flex-1 bg-transparent border-none outline-none text-Typography-White-64 text-lg font-normal font-['GT_America'] leading-normal"
                              placeholder="Last Name"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                          <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20" />
                        </div>
                      </div>
                      <div
                        data-breakpoint="Desktop"
                        data-color="Purple BG"
                        data-right-icon="false"
                        data-type="Default"
                        className="self-stretch flex flex-col justify-start items-start gap-3"
                      >
                        <div className="self-stretch justify-start">
                          <span className="text-Typography-White-64 text-sm font-medium font-['GT_America'] leading-tight">
                            Email Address
                          </span>
                          <span className="text-Typography-Brand text-sm font-medium font-['GT_America'] leading-tight">
                            *
                          </span>
                        </div>
                        <div className="self-stretch flex flex-col justify-start items-start gap-2">
                          <div className="self-stretch inline-flex justify-between items-center">
                            <input
                              type="email"
                              className="flex-1 bg-transparent border-none outline-none text-Typography-White-64 text-lg font-normal font-['GT_America'] leading-normal"
                              placeholder="Email Address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                          <div className="self-stretch h-0 outline outline-1 outline-offset-[-0.50px] outline-Stroke-White-20%/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-2">
                  <div className="pt-px inline-flex justify-start items-center gap-2.5">
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-Typography-Brand"
                      id="termsCheckbox"
                    />
                  </div>
                  <div className="flex-1 justify-start text-Typography-White text-sm font-normal font-['GT_America'] leading-tight">
                    I agree to the Qatar Creates Membership Terms & Conditions,
                    including policies on cancellations, upgrades, and member
                    benefits.
                  </div>
                </div>
              </div>
            </div>
            {/* AlertDialog logic */}
            {/*
              Move AlertDialog outside so we can control its open state.
            */}
            {/* Add state for dialog open */}
            {/* Add this above return in your component:
              const [open, setOpen] = React.useState(false);
            */}
            <AlertDialog open={open} onOpenChange={setOpen}>
              <AlertDialogTrigger asChild>
                {/* Hidden trigger, not used */}
                <button style={{ display: "none" }} />
              </AlertDialogTrigger>
              <AlertDialogTitle >
                {/* Title can be empty or used for accessibility */}
                </AlertDialogTitle>
              <AlertDialogContent>
                <div className="p-10 relative bg-Background-White inline-flex flex-col justify-start items-center gap-9">
                  <div className="flex flex-col justify-start items-center gap-5">
                    <div className="w-11 h-11 relative">
                    {paymentIcon()}
                    </div>
                    <div className="w-96 flex flex-col justify-start items-center gap-2">
                      <div className="self-stretch text-center justify-start text-Typography-Black text-4xl font-normal font-['Lyon_Arabic_Display'] capitalize leading-10">
                        Payment Successful
                      </div>
                      <div className="self-stretch text-center justify-start">
                        <span className="text-Typography-Grey-700 text-sm font-normal font-['GT_America'] leading-tight">
                          Thank you for joining Qatar Creates.{" "}
                        </span>
                        <span className="text-Typography-Black text-sm font-medium font-['GT_America'] leading-tight">
                          Your membership is now active
                        </span>
                        <span className="text-Typography-Grey-700 text-sm font-normal font-['GT_America'] leading-tight">
                          , and your benefits are ready to explore.
                        </span>
                      </div>
                    </div>
                  </div>
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
                          Go to your overview
                        </div>
                      </div>
                    </div>
                  </div>
          
                </div>
                <AlertDialogCancel asChild>
                  <button className="absolute border-none right-4 top-4 p-1 text-gray-500 hover:text-gray-900 focus:outline-none">
                    {cancelButton()}
                  </button>
                </AlertDialogCancel>
                <AlertDialogHeader>
                  <AlertDialogDescription>
                    {/* ...dialog body unchanged... */}
                  </AlertDialogDescription>
                </AlertDialogHeader>
              </AlertDialogContent>
            </AlertDialog>
            <OrderSummary
              details={[
                { label: "Membership Tier:", value: "Explorer" },
                { label: "Membership Duration:", value: "1 year" },
                { label: "Start Date:", value: "21 Sep, 2025" },
              ]}
              prices={[
                { label: "Membership Price (1 Item)", value: "QAR 500" },
                { label: "Addition Audit (1 item)", value: "QAR 150" },
                { label: "Addition Child (2 items)", value: "QAR 100" },
              ]}
              totalValue="QAR 750"
              onCheckout={() => setOpen(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
