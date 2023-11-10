// Module imports
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

// Custom components
import StationItem from "./StationItem";
import Pagination from "../ui/Pagination";
import Sort from "../ui/Sort";
import SearchStation from "./SearchStation";

// API functions
import { getStations } from "../services/apiStation";

function StationList() {
  const [data, setData] = useState();
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [ascending, setAscending] = useState(true);

  // Set current page number
  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  // Fetch stations data on searchParam change
  useEffect(() => {
    fetchStations();
  }, [searchParams, ascending]);

  // Data fetch
  const fetchStations = async () => {
    const order = ascending ? "asc" : "desc";
    const search = searchParams.get("search");
    const stations = await getStations(page, 10, order, search);
    setData(stations);
    setCount(stations.stationCount);
    setIsLoading(false);
  };

  return (
    <div>
      <SearchStation />
      <Sort ascending={ascending} setAscending={setAscending} />
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <ul role="list" className="m-3 flex flex-col gap-2">
          {data.stations.map((station) => (
            <StationItem station={station} key={station.id} />
          ))}
        </ul>
      )}
      <Pagination
        count={count}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
}

export default StationList;
