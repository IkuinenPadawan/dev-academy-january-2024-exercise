function Pagination() {
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
