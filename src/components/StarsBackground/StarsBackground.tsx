import { cn } from "@/utils/utils";
import React, { useEffect } from "react";

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
  const generateRandomPercent = (max = 100) => {
    const randomInteger = Math.floor(Math.random() * (max + 1));
    return `${randomInteger}%`;
  };

  const generateRandomDelay = (interval = 3) => {
    const randomInteger = Math.random() * (interval + 1);
    return `${randomInteger}s`;
  };

  const createStar = () => {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = generateRandomPercent();
    star.style.left = generateRandomPercent();
    star.style.animationDelay = generateRandomDelay();
    return star;
  };

  useEffect(() => {
    const isMobileDevice = () => {
      return /Mobi|Android/i.test(navigator.userAgent);
    };

    const actualStarsAmount = isMobileDevice() ? amountMobile : amountDesktop;
    const containers = document.getElementsByClassName("starsContainer");
    const placeholdersArray = Array(actualStarsAmount).fill("star_placeholder");

    for (let i = 0; i < containers.length; i++) {
      const starsArray = placeholdersArray.map(() => createStar());
      containers[i]!.append(...starsArray);
    }
  }, [amountDesktop, amountMobile]);

  return (
    <div
      className={cn(
        "starsContainer lg:flex relative w-full overflow-hidden z-50",
        className,
      )}
    >
      {children}
    </div>
  );
};
