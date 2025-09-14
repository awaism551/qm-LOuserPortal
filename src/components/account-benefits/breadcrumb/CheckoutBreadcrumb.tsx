"use client";

import { usePathname } from "next/navigation";

const CheckoutBreadcrumb = () => {
  const pathname = usePathname();
  const isCartPage = pathname?.includes("cart");

  return (
    <div className="self-stretch h-11 inline-flex justify-start items-start gap-7">
      <div
        className={`justify-start text-Typography-White text-4xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-10 ${
          isCartPage ? "" : "opacity-30 text-Typography-White-64"
        }`}
      >
        Cart
      </div>
      <div
        className={`justify-start text-4xl font-medium font-['Lyon_Arabic_Display'] capitalize leading-10 ${
          isCartPage
            ? "opacity-30 text-Typography-White-64"
            : "text-Typography-White"
        }`}
      >
        Checkout & Payment
      </div>
    </div>
  );
};

export default CheckoutBreadcrumb;
