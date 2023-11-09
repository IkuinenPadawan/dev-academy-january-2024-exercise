function Pagination({ count, searchParams, setSearchParams }) {
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / 10);

  return (
    <div className="flex flex-row justify-between text-slate-50">
      <p className="flex gap-1">
        Showing{" "}
        <span className="font-bold font">
          {(currentPage - 1) * PAGE_LIMIT + 1}
        </span>{" "}
        to{" "}
        <span className="font-bold">
          {currentPage === pageCount ? count : currentPage * PAGE_LIMIT}
        </span>{" "}
        of <span className="font-bold">{count}</span> results
      </p>
      <div>
        <button>{"<"} Previous</button>
        <button>Next {">"}</button>
      </div>
    </div>
  );
}

export default Pagination;
