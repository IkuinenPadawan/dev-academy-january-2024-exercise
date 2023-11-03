import { useState } from "react";

function SearchStation() {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    setQuery("");
  }

  return (
    <form className="group relative bg-slate-700" onSubmit={handleSubmit}>
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-amber-600"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        />
      </svg>
      <input
        placeholder="Search station..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="focus:ring-2 focus:ring-amber-600 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 bg-slate-700 rounded-md py-2 pl-10 ring-1 ring-slate-900 shadow-sm"
        type="text"
      />
    </form>
  );
}
//"focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"  aria-label="Filter projects" >

export default SearchStation;
