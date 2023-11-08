import StationItem from "./StationItem";

function StationList() {
  return (
    <ul role="list" className="m-3 flex flex-col gap-2">
      <StationItem />
    </ul>
  );
}

export default StationList;
