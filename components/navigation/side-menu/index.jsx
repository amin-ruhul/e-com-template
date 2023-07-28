import React from "react";
import ChevronRight from "@/components/data-display/icons/chevron-right";
import { motion } from "framer-motion";
import SubMenu from "./sub-menu";

function SideMenu({ categoryList }) {
  const animateVariation = {
    initial: {
      x: 340,
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
      x: 361,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div>
      {!!categoryList?.length && (
        <ul className="rounded-b-md border border-secondary text-sm font-light">
          {categoryList.map((category) => (
            <motion.li
              key={category.slug}
              initial="initial"
              animate="initial"
              exit="exit"
              whileHover="animate"
              className="relative cursor-pointer px-3"
            >
              <div className="flex items-center justify-between border-b border-secondary py-5">
                <p>{category.name}</p>
                {!!category.childes?.length && <ChevronRight />}
              </div>

              {!!category.childes?.length && (
                <motion.div
                  className="absolute top-0 z-50 rounded-md bg-white shadow-sm"
                  variants={animateVariation}
                >
                  <SubMenu subCategoryList={category.childes} />
                </motion.div>
              )}
            </motion.li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SideMenu;
