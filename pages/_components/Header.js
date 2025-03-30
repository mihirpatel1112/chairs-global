import React from "react";
import Image from "next/image";
import Margin from "./Margin";

export default function Header() {
  return (
    <Margin>
    <div className="flex mt-20 justify-between">
      <div>
        <Image
          src="/logoWithName.png"
          alt="logoWithName"
          width={250}
          height={250}
        />
      </div>
      <div>
        <button className="flex bg-primary p-4 px-8 text-white font-lora text-xl gap-x-4 cursor-pointer hover:rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out">
          Chair Login
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
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
