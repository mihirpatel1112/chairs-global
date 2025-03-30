import React from "react";
import Margin from "./Margin";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <Margin>
      {/* <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/> */}
      <div className="my-40 w-[70%] text-white">
        {/* <motion.div
          className="text-7xl font-lora leading-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Serving to connect, <br />
          convene, support and advise those who lead boards
        </motion.div> */}
        <div className="text-7xl font-lora leading-[5.5rem] h-[15rem] text-white">
          Serving to connect,  <br />convene, support and advise &nbsp;
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
              delay: 100,
            }}
          />
        </div>
        <div className="mt-16">
          <motion.button
            className="bg-secondary p-4 px-8 text-xl text-white font-lora 
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
