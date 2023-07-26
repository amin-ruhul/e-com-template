import CrossIcon from "../../icons/cross";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function TopPromotionalBanner({ promotionalText, onClick }) {
  return (
    <motion.article
      variants={{
        hidden: {
          opacity: 0,
          height: 0,
        },
        visible: {
          opacity: 1,
          height: "auto",
        },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3, delay: 0.2 }}
      className="container"
    >
      <div className=" flex w-full items-center justify-between py-4">
        <button onClick={onClick} className="text-primary">
          <CrossIcon />
        </button>
        <div className="flex-1 text-center text-sm text-primary">
          {promotionalText}
        </div>
      </div>
    </motion.article>
  );
}

TopPromotionalBanner.propTypes = {
  promotionalText: PropTypes.string,
  onClick: PropTypes.func,
};

export default TopPromotionalBanner;
