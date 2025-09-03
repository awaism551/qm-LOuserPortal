import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Card({ className, ...props }: CardProps) {
  return (
    <div className={cn("bg-background rounded-md p-4", className)} {...props} />
  );
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div className={cn("p-4", className)} {...props} />
  );
}