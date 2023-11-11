// Import modules
import { useNavigate } from "react-router-dom";

// Custom components
import SearchIcon from "./SearchIcon";
import ArrowIcon from "./ArrowIcon";

function MobileFooter() {
  const navigate = useNavigate();

  const activateSearch = () => {
    // Pass a flag through the URL to indicate that it's coming from the search button
    navigate("/?activateSearch=true");
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-slate-700 p-4 flex justify-around items-center text-xs sm:hidden">
      <button
        className="flex flex-col justify-center items-center"
        onClick={() => navigate(-1)}
      >
        <ArrowIcon direction="left" />
        Go Back
      </button>

      <button
        className="flex flex-col justify-center items-center"
        onClick={activateSearch}
      >
        <SearchIcon className="w-5 h-5" />
        Search
      </button>
    </footer>
  );
}

export default MobileFooter;
