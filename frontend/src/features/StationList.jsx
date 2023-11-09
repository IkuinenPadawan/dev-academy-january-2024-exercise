import { useEffect, useState } from "react";
import StationItem from "./StationItem";
import Pagination from "../ui/Pagination";
import { getStations } from "../services/apiStation";

import { useSearchParams } from "react-router-dom";

function StationList() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchStations();
  }, [searchParams]);

  const fetchStations = async () => {
    const stations = await getStations(searchParams.get("page"));
    setData(stations);
    setIsLoading(false);
  };

  return (
    <div>
      <ul role="list" className="m-3 flex flex-col gap-2">
        {isLoading && <p>Loading...</p>}
        {!isLoading &&
          data.stations.map((station) => (
            <StationItem station={station} key={station.id} />
          ))}
      </ul>
      <Pagination
        count={100}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
    </div>
  );
}

export default StationList;
