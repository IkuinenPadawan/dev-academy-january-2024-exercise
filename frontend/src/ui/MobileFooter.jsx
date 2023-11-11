// Import modules
import { useNavigate } from "react-router-dom";

function MobileFooter() {
  const navigate = useNavigate();

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-slate-700 p-4 flex justify-around items-center text-xs sm:hidden">
      <button
        className="text-white flex flex-col justify-center items-center"
        onClick={() => navigate(-1)}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 5H1m0 0l4-4m0 8l-4-4"
          />
        </svg>
        Go Back
      </button>

      <button className="text-white flex flex-col justify-center items-center">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        Search
      </button>
    </footer>
  );
}

export default MobileFooter;
