'use client'
import { ReactNode } from "react";

export const DarkButton = ({
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
        flex flex-col bg-purple-800 text-white inline-flex text-center justify-center cursor-pointer 
        transition-colors hover:shadow-lg rounded leading-none px-4 py-2
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
