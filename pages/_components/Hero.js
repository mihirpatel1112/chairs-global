import React from "react";
import Margin from "./Margin";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <Margin>
      <div className="my-20 md:my-40 w-full md:w-[80%] xl:w-[70%] text-white">
        <div className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-lora leading-snug md:leading-[5.5rem] min-h-[10rem] md:min-h-[15rem]">
          Serving to connect,<br />
          convene, support and advise&nbsp;
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("those who lead boards")
                .pauseFor(1000)
                .callFunction(() => {
                  const cursor = document.querySelector(".Typewriter__cursor");
                  if (cursor) cursor.style.display = "none";
                })
                .start();
            }}
            options={{
              autoStart: true,
              loop: false,
              delay: 80,
            }}
          />
        </div>

        <div className="mt-10 md:mt-16">
          <motion.button
            className="bg-secondary p-3 md:p-4 px-6 md:px-8 text-base md:text-xl text-white font-lora 
            hover:rounded-2xl hover:shadow-2xl hover:scale-105 
            transition-all duration-300 ease-in-out cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            Connect now
          </motion.button>
        </div>
      </div>
    </Margin>
  );
}