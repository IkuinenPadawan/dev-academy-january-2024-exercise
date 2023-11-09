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

  return (
    <div className="flex flex-row justify-between text-slate-50">
      <p className="flex gap-1">
        Showing{" "}
        <span className="font-bold font">{(currentPage - 1) * 10 + 1}</span> to{" "}
        <span className="font-bold">
          {currentPage === pageCount ? count : currentPage * 10}
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
