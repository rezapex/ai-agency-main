import { Link } from "next-view-transitions";
import React from "react";

export const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <div className="relative w-5 h-5"> {/* Adjusted the size of the circle */}
        <svg
          className="absolute inset-0"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f9fafb" /> {/* Gray 50 */}
              <stop offset="100%" stopColor="#d1d5db" /> {/* Gray 300 */}
            </linearGradient>
          </defs>
          <path
            d="M10 2C5.48 2 2 5.48 2 10C2 14.52 5.48 18 10 18C14.52 18 18 14.52 18 10C18 5.48 14.52 2 10 2ZM10 16C6.58 16 4 13.42 4 10C4 6.58 6.58 4 10 4C13.42 4 16 6.58 16 10C16 13.42 13.42 16 10 16Z"
            fill="url(#logoGradient)"
          />
          <path
            d="M10 6C7.69 6 6 7.69 6 10C6 12.31 7.69 14 10 14V6Z"
            fill="url(#logoGradient)"
          />
        </svg>
      </div>
      <span className="font-medium text-black dark:text-white">
        Prosperus
        <span className="bg-gradient-to-r from-[#199e75] to-[#3fc899] text-transparent bg-clip-text">
          .ai
        </span>
      </span>
    </Link>
  );
};