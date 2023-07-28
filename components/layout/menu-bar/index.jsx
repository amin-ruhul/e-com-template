import HamBurgerIcon from "@/components/data-display/icons/hamburger";
import ChevronDown from "@/components/data-display/icons/chevron-down";
import { storeList } from "@/utils/data/store-data";
import MegaDropDown from "@/components/navigation/mega-drop-down";
import { motion } from "framer-motion";

function MenuBar() {
  const MAX_STORE_TO_SHOW = 7;

  const animateVariation = {
    initial: {
      y: 0,
      x: -33,
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
      y: 20,
      x: -33,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="container grid grid-cols-4 items-center gap-3">
      <button className="jsu flex items-center justify-between bg-primary-400 px-8 py-5 font-medium text-white">
        <div className="flex items-center gap-4">
          <HamBurgerIcon />
          Browse Category
        </div>
        <ChevronDown />
      </button>

      <ul className="col-span-2 -ml-3 flex items-center font-light">
        <li className="cursor-pointer px-6 py-5 hover:bg-secondary">Home</li>

        <motion.li
          className="relative cursor-pointer px-6 py-5 hover:bg-secondary"
          initial="initial"
          animate="initial"
          exit="exit"
          whileHover="animate"
        >
          <div className="flex items-center">
            <p>Offers</p>
            <ChevronDown />
          </div>

          <motion.div
            className="absolute left-8 z-50"
            variants={animateVariation}
          >
            <MegaDropDown
              dropDownData={storeList.slice(0, MAX_STORE_TO_SHOW)}
            />
          </motion.div>
        </motion.li>

        <motion.li
          className="relative cursor-pointer px-6 py-5 hover:bg-secondary"
          initial="initial"
          animate="initial"
          exit="exit"
          whileHover="animate"
        >
          <div className="flex items-center">
            <p>Stores</p>
            <ChevronDown />
          </div>

          <motion.div
            className="absolute left-8 z-50"
            variants={animateVariation}
          >
            <MegaDropDown
              dropDownData={storeList.slice(0, MAX_STORE_TO_SHOW)}
            />
          </motion.div>
        </motion.li>

        <motion.li
          className="relative cursor-pointer px-6 py-5 hover:bg-secondary"
          initial="initial"
          animate="initial"
          exit="exit"
          whileHover="animate"
        >
          <div className="flex items-center">
            <p>Brands</p>
            <ChevronDown />
          </div>

          <motion.div
            className="absolute left-8 z-50"
            variants={animateVariation}
          >
            <MegaDropDown
              dropDownData={storeList.slice(0, MAX_STORE_TO_SHOW)}
            />
          </motion.div>
        </motion.li>

        <li className="cursor-pointer px-6 py-5 hover:bg-secondary">
          Discount Product
        </li>
      </ul>
      <div></div>
    </div>
  );
}

export default MenuBar;
