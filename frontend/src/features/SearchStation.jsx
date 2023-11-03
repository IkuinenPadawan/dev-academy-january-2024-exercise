import { useState } from "react";

function SearchStation() {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    setQuery("");
  }

  return (
    <form className="group relative" onSubmit={handleSubmit}>
      <input
        placeholder="Search station..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchStation;
