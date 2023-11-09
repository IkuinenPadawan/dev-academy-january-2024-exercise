import { useEffect, useState } from "react";
import StationItem from "./StationItem";
import Pagination from "../ui/Pagination";
import { getStations } from "../services/apiStation";

function StationList() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    const stations = await getStations();
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
      <Pagination />
    </div>
  );
}

export default StationList;
