import React from "react";
import Margin from "./Margin";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-primary">
      <Margin>
        <div className="flex justify-between items-center py-10">
          <div className="flex gap-x-14 items-center">
            <div>
              <Image
                src="/logoWithoutName.png"
                alt="logo"
                width={60}
                height={60}
              />
            </div>
            <div className="font-mont text-white text-md">
              <div className="cursor-pointer">
                Phone: <u>1300 034 034</u>
              </div>
              <div className="cursor-pointer">
                Email: <u>info@chairsglobal.com</u>
              </div>
            </div>
          </div>
          <div className="font-mont text-white text-md text-left">
            © 2025 Chairs Global
          </div>
        </div>
      </Margin>
    </div>
  );
}
