import { cn } from "@/utils/utils";
import React from "react";

export const MaxWidthContainer = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex max-w-screen-2xl mx-auto", className)}>
      {children}
    </div>
  );
};
