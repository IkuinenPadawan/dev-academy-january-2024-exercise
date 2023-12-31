// Module imports
import PropTypes from "prop-types";

function Pagination({ count, searchParams, setSearchParams }) {
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / 10);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function prevPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", prev);
    setSearchParams(searchParams);
  }

  // If no more than 1 page hide pagination
  if (pageCount <= 1) return null;

  return (
    <div className="flex flex-col justify-end sm:flex-row sm:justify-between">
      {" "}
      <p className="flex gap-1 justify-end">
        Showing{" "}
        <span className="font-bold font">{(currentPage - 1) * 10 + 1}</span> to{" "}
        <span className="font-bold">
          {currentPage === pageCount ? count : currentPage * 10}
        </span>{" "}
        of <span className="font-bold">{count}</span> results
      </p>
      <div className="inline-flex text-sm justify-end">
        <button
          className="font-bold rounded-l py-2 bg-blue-400 hover:bg-blue-300 px-2 disabled:bg-slate-400"
          onClick={prevPage}
          disabled={currentPage === 1}>
          {"<"} Previous
        </button>
        <button
          className="font-bold rounded-r py-2 bg-blue-400 hover:bg-blue-300 px-2 disabled:bg-slate-400"
          onClick={nextPage}
          disabled={currentPage === pageCount}>
          Next {">"}
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  count: PropTypes.number.isRequired,
  searchParams: PropTypes.object,
  setSearchParams: PropTypes.func,
};

export default Pagination;
