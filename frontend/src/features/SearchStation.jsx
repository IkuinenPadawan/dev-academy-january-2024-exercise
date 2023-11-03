import { useState } from "react";

function SearchStation() {
  const [query, setQuery] = useState("");

  return (
    <form className="group relative">
      <input
        placeholder="Search station..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}

export default SearchStation;
