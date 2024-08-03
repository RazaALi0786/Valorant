import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-black">
      <div className="text border-t-2 border-b-2 border-red-500 flex gap-10 overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[15vw] text-white leading-none font-valorant uppercase pt-5 -mb-8 font-semibold"
        >
          Welcome to Our Valorant Journey!
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[15vw] text-white leading-none font-valorant uppercase pt-5 -mb-8 font-semibold"
        >
          Welcome to Our Valorant Journey!
        </motion.h1>
      </div>
    </div>
  );
}
export default Marquee;
