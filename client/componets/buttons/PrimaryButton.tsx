'use client'
import { ReactNode } from "react";

export const PrimaryButton = ({
  children,
  onClick,
  size = "small",
}: {
  children: ReactNode;
  onClick: () => void;
  size?: "big" | "small";
}) => {
  return (
    <div
      className={`
        ${size === "small" ? "px-8 py-2 text-sm" : "px-12 py-4 text-lg"} 
        bg-amber-700 text-white inline-flex items-center justify-center cursor-pointer 
        transition-colors hover:shadow-lg rounded-full leading-none
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
