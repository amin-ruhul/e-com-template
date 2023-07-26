import PropTypes from "prop-types";

function Indicator({ itemCount, children, className }) {
  return (
    <button className={`${className} relative inline-flex items-center`}>
      <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-primary rounded-full -top-2 -right-2">
        {itemCount}
      </div>

      {children}
    </button>
  );
}

Indicator.propTypes = {
  itemCount: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Indicator;
