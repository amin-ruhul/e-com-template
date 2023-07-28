import ChevronDown from "@/components/data-display/icons/chevron-down";
import CrossIcon from "@/components/data-display/icons/cross";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import ChildItems from "./child-items";
import { mobileMenuItems } from "@/utils/data/menu";

function MobileNav({ onClick }) {
  const [openState, setOpenState] = useState([]);

  const handleState = (currentSelected) => {
    if (openState.includes(currentSelected)) {
      setOpenState(openState.filter((state) => state !== currentSelected));
    } else {
      setOpenState([...openState, currentSelected]);
    }
  };

  const isMenuActive = (selectedMenu) => openState.includes(selectedMenu);

  return (
    <motion.div
      className="fixed inset-0 z-50 w-[80%] bg-white shadow"
      variants={{
        open: {
          x: 0,
        },
        close: {
          x: "-100%",
        },
      }}
      initial="close"
      animate="open"
      exit="close"
      transition={{ duration: 0.2, delay: 0.1, bounce: 0.1 }}
    >
      <div className="flex items-center justify-between px-4 pt-5">
        <div className="relative h-[2.3rem] w-[6.25rem] shrink-0">
          <Image
            src="/assets/logo.png"
            alt="logo"
            fill
            sizes="640"
            priority
            objectFit="contain"
          />
        </div>
        <button className="text-xl" onClick={onClick}>
          <CrossIcon />
        </button>
      </div>

      <div className="my-3 border-[3px] border-t border-primary"></div>

      <div>
        <ul className="space-y-2 px-4 font-light">
          {mobileMenuItems.map((menuItem) => (
            <li className="cursor-pointer py-2" key={menuItem.slug}>
              <div
                className={`flex items-center justify-between ${
                  isMenuActive(menuItem.slug) && "font-medium text-primary"
                }`}
                onClick={() => handleState(menuItem.slug)}
              >
                <p>{menuItem.label}</p>
                <div className="text-lg">
                  {!!menuItem.children.length && <ChevronDown />}
                </div>
              </div>
              {!!menuItem.children.length && (
                <ChildItems
                  itemList={menuItem.children}
                  isActive={isMenuActive(menuItem.slug)}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default MobileNav;
