import StationItem from "./StationItem";
import Pagination from "../ui/Pagination";

function StationList() {
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

export default StationList;
