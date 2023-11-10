function Sort({ ascending, setAscending }) {
  return (
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdown"
      className="my-1 text-slate-50 bg-blue-500 hover:bg-blue-400 rounded-md font-medium text-sm px-5 py-2.5 text-center inline-flex items-center"
      type="button"
      onClick={() => setAsceding(!ascending)}
    >
      Sort by station name
    </button>
  );
}

export default Sort;
