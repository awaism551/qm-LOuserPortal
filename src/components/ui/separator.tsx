import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Separator({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("h-px w-full bg-gray-300", className)} {...props} />
  );
}