import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function DropDown({ dropDownData, isModalOpen, handleItemChange }) {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className=" bg-white absolute  text-black shadow-md border rounded z-50 min-w-[200px]"
          initial={{ top: 20, opacity: 0 }}
          animate={{ top: 30, opacity: 1 }}
          exit={{ top: 20, opacity: 0 }}
        >
          <ul className="px-2">
            {dropDownData.map((item) => (
              <div key={item.id}>
                <li
                  className="py-3 cursor-pointer"
                  onClick={() => handleItemChange(item.value)}
                >
                  <p>{item.value}</p>
                </li>
                <hr />
              </div>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

DropDown.propTypes = {
  isModalOpen: PropTypes.bool,
  handleItemChange: PropTypes.func,
};

export default DropDown;
