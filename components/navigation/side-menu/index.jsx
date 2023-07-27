import React from "react";
import ChevronRight from "@/components/data-display/icons/chevron-right";
import { motion } from "framer-motion";
import SubMenu from "./sub-menu";

function SideMenu() {
  const animateVariation = {
    initial: {
      x: 350,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
    animate: {
      display: "block",
      x: 371,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div>
      <ul className=" text-sm font-light">
        <motion.li
          initial="initial"
          animate="initial"
          exit="exit"
          whileHover="animate"
          className="relative cursor-pointer border px-3"
        >
          <div className="flex items-center justify-between border-b border-secondary py-5">
            <p>Camera Accessories</p>
            <ChevronRight />
          </div>

          <motion.div
            className="absolute top-0 z-50 bg-white shadow-sm"
            variants={animateVariation}
          >
            <SubMenu />
          </motion.div>
        </motion.li>
        <li className="px-3 py-5">
          <p>Camera Accessories</p>
        </li>
        <li className="px-3 py-5">
          <p>Camera Accessories</p>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
