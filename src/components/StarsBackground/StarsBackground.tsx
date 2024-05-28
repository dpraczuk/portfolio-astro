import { cn } from "@/utils/utils";
import React from "react";

export const StarsBackground = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "starsContainer min-h-screen flex relative w-full overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
