import React from "react";
import ChevronRight from "@/components/data-display/icons/chevron-right";
import MenuItems from "../menu-items";
import { motion } from "framer-motion";

function SubMenu({ subCategoryList }) {
  const animateVariation = {
    initial: {
      x: 270,
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
      x: 288,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <ul className="rounded-md border">
      {subCategoryList.map((subCategory) => (
        <motion.li
          className="relative w-[300px] cursor-pointer px-3"
          initial="initial"
          animate="initial"
          exit="exit"
          whileHover="animate"
          key={subCategory.slug}
        >
          <div className="flex items-center justify-between border-b border-secondary py-5">
            <p>{subCategory.name}</p>
            {!!subCategory.childes?.length && <ChevronRight />}
          </div>

          {!!subCategory.childes?.length && (
            <motion.div
              className="absolute top-0 z-50 rounded-md bg-white shadow-sm"
              variants={animateVariation}
            >
              <MenuItems menuList={subCategory.childes} />
            </motion.div>
          )}
        </motion.li>
      ))}
    </ul>
  );
}

export default SubMenu;
