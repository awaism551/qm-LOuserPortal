import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <div className={cn("bg-background rounded-md px-2 py-1", className)} {...props} />
  );
}
