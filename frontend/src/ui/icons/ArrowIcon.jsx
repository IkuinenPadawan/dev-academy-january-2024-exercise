// Import Modules
import PropTypes from "prop-types";

function ArrowIcon({ direction }) {
  return (
    <div>
      <svg
        className="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 14 10">
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d={
            direction === "left"
              ? "M13 5H1m0 0l4-4m0 8l-4-4"
              : "M1 5h12m0 0l-4-4m0 8l4-4"
          }
        />
      </svg>
    </div>
  );
}

ArrowIcon.propTypes = {
  direction: PropTypes.string.isRequired,
};

export default ArrowIcon;
