import CrossIcon from "@/components/data-display/icons/cross";
import { motion } from "framer-motion";

function MobileNav({ onClick }) {
  return (
    <motion.div
      className="fixed inset-0 bg-primary-400 w-[80%]"
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.2, delay: 0.1, bounce: 0.1 }}
    >
      <div className="flex justify-end p-5">
        <button className="text-xl text-white" onClick={onClick}>
          <CrossIcon />
        </button>
      </div>
    </motion.div>
  );
}

export default MobileNav;
