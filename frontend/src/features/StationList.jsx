import { useEffect, useState } from "react";
import StationItem from "./StationItem";
import Pagination from "../ui/Pagination";
import { getStations } from "../services/apiStation";

import { useSearchParams } from "react-router-dom";

function StationList() {
  const [data, setData] = useState();
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

  useEffect(() => {
    fetchStations();
  }, [searchParams]);

  const fetchStations = async () => {
    const stations = await getStations(page);
    setData(stations);
    setCount(stations.stationCount[0].count);
    setIsLoading(false);
  };

  return (
    <div>
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
