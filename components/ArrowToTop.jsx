"use client";

import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { textFrameVariants } from "@/lib/framerVariants";

export default function ArrowToTop() {
  const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY > 100) {
  //     setIsVisible(true);
  //   } else {
  //     setIsVisible(false);
  //   }
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
    
    initial={textFrameVariants.initialStateFromBottom}
    whileInView={textFrameVariants.finalState}
    >
      {isVisible && (
        // <div className="fixed z-30 cursor-pointer bottom-16 right-6">
        <div className="cursor-pointer bottom-16 right-6">
          <FaArrowCircleUp
            className="overflow-hidden text-5xl text-[#c07f2a] rounded-full border-2 border-white"
            onClick={scrollToTop}
          />
        </div>
      )}
    </motion.div>
  );
}
