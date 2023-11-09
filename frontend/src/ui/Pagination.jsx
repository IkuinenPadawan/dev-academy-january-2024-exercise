function Pagination({ count, searchParams, setSearchParams }) {
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / 10);

  return (
    <div className="flex flex-row justify-between text-slate-50">
      <p>
        Showing <span>1</span> to <span>10</span> of <span>50</span> results
      </p>
      <div>
        <button>{"<"} Previous</button>
        <button>Next {">"}</button>
      </div>
    </div>
  );
}

export default Pagination;
