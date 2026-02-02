import { cn } from "@/utils/utils";
import React, { useEffect } from "react";

export const StarsBackground = ({
  children,
  className,
  starsAmount = 150,
}: {
  children?: React.ReactNode;
  className?: string;
  starsAmount?: number;
}) => {
  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  if (isMobileDevice()) {
    starsAmount = 75;
  }

  function generateRandomPercent(max = 100) {
    const randomInteger = Math.floor(Math.random() * (max + 1));
    return `${randomInteger}%`;
  }
  function generateRandomDelay(interval = 3) {
    const randomInteger = Math.random() * (interval + 1);
    return `${randomInteger}s`;
  }

  function createStar() {
    const star = document.createElement("div");
    star.classList.add("star");
    star.style.top = generateRandomPercent();
    star.style.left = generateRandomPercent();
    star.style.animationDelay = generateRandomDelay();
    return star;
  }

  function renderStars() {
    const containers = document.getElementsByClassName("starsContainer");
    const placeholdersArray = Array(starsAmount).fill("star_placeholder");

    for (let i = 0; i < containers.length; i++) {
      const starsArray = placeholdersArray.map(() => createStar());
      containers[i]!.append(...starsArray);
    }
  }

  useEffect(() => {
    renderStars();
  }, []);

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
