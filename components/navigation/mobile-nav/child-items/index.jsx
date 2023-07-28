import { motion } from "framer-motion";
import Link from "next/link";
import PropTypes from "prop-types";

function ChildItems({ isActive, itemList }) {
  return (
    <motion.div
      variants={{
        close: {
          height: 0,
          overflow: "hidden",
        },
        open: {
          height: "auto",
        },
      }}
      initial="close"
      animate={isActive ? "open" : "close"}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <ul className="px-4">
        {itemList.map((item) => (
          <Link key={item.slug} href="/">
            <li className="cursor-pointer border-b border-secondary py-2">
              <div>{item.label}</div>
            </li>
          </Link>
        ))}
      </ul>
    </motion.div>
  );
}

ChildItems.propTypes = {
  isActive: PropTypes.bool,
  itemList: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default ChildItems;
