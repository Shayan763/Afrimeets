import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SpanbadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Span({ children, className = "" }: SpanbadgeProps) {
  return (
    <span className={twMerge("text-blue-500 font-bold", className)}>
      {children}
    </span>
  );
}
