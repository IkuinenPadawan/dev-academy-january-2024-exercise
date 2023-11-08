import { useLoaderData } from "react-router-dom";
import StationItem from "./StationItem";
import { getStations } from "../services/apiStation";

function StationList() {
  const stations = useLoaderData();
  return (
    <ul role="list" className="m-3 flex flex-col gap-2">
      <StationItem />
    </ul>
  );
}

export async function loader() {
  const stations = await getStations();
  return stations;
}

export default StationList;
