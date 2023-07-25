import CrossIcon from "../../icons/cross";
import PropTypes from "prop-types";

function TopPromotionalBanner({ promotionalText, onClick }) {
  return (
    <article className="flex items-center px-8 py-3 bg-slate-100">
      <button onClick={onClick}>
        <CrossIcon />
      </button>
      <div className="flex-1 text-center text-sm text-blue-500">
        {promotionalText}
      </div>
    </article>
  );
}

TopPromotionalBanner.propTypes = {
  promotionalText: PropTypes.string,
  onClick: PropTypes.func,
};

export default TopPromotionalBanner;
