import React from "react";
import Image from "next/image";
import Margin from "./Margin";

export default function Header() {
  return (
    <Margin>
      <div className="flex flex-col sm:flex-row mt-6 sm:mt-10 md:mt-20 justify-between items-center gap-4 sm:gap-6">
        <div className="w-full sm:w-auto flex justify-center sm:justify-start">
          <Image
            src="/logoWithName.png"
            alt="logoWithName"
            width={200}
            height={200}
            className="w-[120px] sm:w-[150px] md:w-[200px] h-auto"
            priority
          />
        </div>
        <div className="w-full sm:w-auto mt-4 sm:mt-0">
          <button className="w-full sm:w-auto flex items-center justify-center bg-primary p-2 sm:p-3 md:p-4 px-4 sm:px-6 md:px-8 text-white font-lora text-sm sm:text-base md:text-xl gap-x-2 md:gap-x-4 cursor-pointer hover:rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
            Chair Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
              />
            </svg>
          </button>
        </div>
      </div>
    </Margin>
  );
}