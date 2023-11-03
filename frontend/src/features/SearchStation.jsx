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
