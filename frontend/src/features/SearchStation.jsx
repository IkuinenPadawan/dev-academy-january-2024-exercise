// Import modules
import { useRef, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// Custom components
import SearchIcon from "../ui/icons/SearchIcon";

function SearchStation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef(null);

  const search = searchParams.get("search") || "";

  // Add input to searchParams when typed
  const handleSearchChange = (e) => {
    setSearchParams(
      (prev) => {
        // Delete search param if input empty
        if (e.target.value.trim() === "") {
          searchParams.delete("search");
        } else {
          prev.set("search", e.target.value);
          return prev;
        }
      },
      { replace: true }
    );
  };

  // Function to focus on the input
  const focusSearchInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    // Check if the flag is present in the URL
    const activateSearch = searchParams.get("activateSearch");
    if (activateSearch) {
      focusSearchInput();
      // Clear the flag in the URL to avoid focusing on subsequent renders
      setSearchParams(
        (params) => {
          params.delete("activateSearch");
          return params;
        },
        { replace: true }
      );
    }
  }, [searchParams, setSearchParams]);

  return (
    <div className="group relative bg-slate-700 my-3">
      <SearchIcon className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-600" />

      <input
        placeholder="Search station..."
        id="search"
        value={search}
        onChange={handleSearchChange}
        className=" focus:ring-2 focus:ring-blue-500 focus:outline-none caret-blue-600 appearance-none w-full text-sm leading-6 placeholder-slate-400 bg-slate-700 rounded shadow-md py-2 pl-10"
        type="text"
        ref={inputRef}
      />
    </div>
  );
}
//"focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm"  aria-label="Filter projects" >

export default SearchStation;
