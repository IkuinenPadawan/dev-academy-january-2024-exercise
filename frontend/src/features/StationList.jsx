import { useLoaderData } from "react-router-dom";
import StationItem from "./StationItem";
import Pagination from "../ui/Pagination";
import { getStations } from "../services/apiStation";

function StationList() {
  const stations = useLoaderData();
  return (
    <div>
      <ul role="list" className="m-3 flex flex-col gap-2">
        {stations.stations.map((station) => (
          <StationItem station={station} key={station.id} />
        ))}
      </ul>
      <Pagination />
    </div>
  );
}

export async function loader() {
  const stations = await getStations();
  return stations;
}

export default StationList;
