import { cn } from "@/utils/utils";
import React, { useMemo } from "react";

function generateStars(amount: number) {
  return Array.from({ length: amount }, (_, i) => ({
    id: i,
    top: `${Math.floor(Math.random() * 101)}%`,
    left: `${Math.floor(Math.random() * 101)}%`,
    delay: `${(Math.random() * 4).toFixed(2)}s`,
  }));
}

export const StarsBackground = ({
  children,
  className,
  amountDesktop = 150,
  amountMobile = 50,
}: {
  children?: React.ReactNode;
  className?: string;
  amountDesktop?: number;
  amountMobile?: number;
}) => {
  const desktopStars = useMemo(
    () => generateStars(amountDesktop),
    [amountDesktop],
  );

  const mobileStars = useMemo(
    () => generateStars(amountMobile),
    [amountMobile],
  );

  return (
    <div
      className={cn(
        "starsContainer lg:flex relative w-full overflow-hidden",
        className,
      )}
    >
      {desktopStars.map((s) => (
        <div
          key={s.id}
          className="star hidden md:block"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
          }}
        />
      ))}
      {mobileStars.map((s) => (
        <div
          key={s.id}
          className="star md:hidden"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
          }}
        />
      ))}
      {children}
    </div>
  );
};
