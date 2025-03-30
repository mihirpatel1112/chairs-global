"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function Card(props) {
  const { title, body, imageURL, imageAlt } = props;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px 0px", 
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="sm:w-[440px] sm:h-[280px] h-[140px] w-[220px] verflow-hidden">
        <Image
          src={imageURL}
          alt={imageAlt}
          width={440}
          height={280}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="py-8 text-primary font-lora text-3xl sm:text-4xl hover:underline transition-all duration-300 ease-in-out cursor-pointer">
        {title}
      </div>
      <div className="text-primary font-mont text-lg sm:text-xl leading-8">{body}</div>
    </motion.div>
  );
}