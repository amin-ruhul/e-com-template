import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function DropDown({ dropDownData, isModalOpen, handleItemChange }) {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          variants={{
            open: {
              top: 30,
              opacity: 1,
            },
            close: {
              top: 20,
              opacity: 0,
            },
          }}
          className="absolute z-50  rounded border bg-white text-black shadow-md md:min-w-[8.5rem] xl:min-w-[12.5rem]"
          initial="close"
          animate="open"
          exit="close"
        >
          <ul className="px-3">
            {dropDownData.map((item) => (
              <div key={item.id}>
                <li
                  className="cursor-pointer py-3"
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
