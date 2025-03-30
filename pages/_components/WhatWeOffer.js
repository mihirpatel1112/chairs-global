import React from "react";
import Margin from "./Margin";
import { motion } from "framer-motion";

export default function WhatWeOffer() {
  return (
    <div className="bg-primary">
      <motion.div 
        className="bg-cover" 
        style={{ backgroundImage: `url('/pattern.png')` }}
        animate={{y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Margin>
          <motion.div
            className="sm:flex text-center text-white py-44"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="font-lora text-4xl sm:text-left sm:text-5xl sm:w-[40%]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              What we offer
            </motion.div>
            <motion.div
              className="sm:w-[60%] sm:py-0 py-10"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              <p className="text-lg sm:text-2xl sm:text-left font-mont text-wrap leading-12">
                A dedicated community for board leaders to connect, learn, and
                access expert insights. Chairs Global is designed exclusively
                for corporate, institutional, and social impact chairs,
                providing a trusted space for peer-to-peer support, governance
                best practices, and strategic leadership resources.
              </p>
            </motion.div>
          </motion.div>
        </Margin>
      </motion.div>
    </div>
  );
}