// Module Imports
import PropTypes from "prop-types";

function Sort({ ascending, setAscending }) {
  return (
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      className="my-1 bg-blue-500 hover:bg-blue-400 rounded-md font-medium text-sm px-4 py-2 text-center inline-flex items-center"
      type="button"
      onClick={() => setAscending(!ascending)}>
      Sort by station name{" "}
      {ascending ? (
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      ) : (
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5 5 1 9 5"
          />
        </svg>
      )}
    </button>
  );
}

Sort.propTypes = {
  ascending: PropTypes.bool.isRequired,
  setAscending: PropTypes.func.isRequired,
};

export default Sort;
