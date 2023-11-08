import { getStation } from "../services/apiStation";

function StationView() {
  return (
    <div className="p-4 bg-slate-700 rounded shadow-md">
      <h1 className="text-2xl text-slate-50">Station name</h1>
      <h2 className="text-lg text-slate-50">Station address</h2>
      <div>
        <h2 className="text-lg text-slate-50">400</h2>
        <h2 className="text-lg text-slate-50">Journeys starting here</h2>
      </div>
      <div>
        <h2 className="text-lg text-slate-50">390</h2>
        <h2 className="text-lg text-slate-50">Journeys ending here</h2>
      </div>
      <div>
        <h2 className="text-lg text-slate-50">12km</h2>
        <h2 className="text-lg text-slate-50">
          Average distance traveled from here
        </h2>
      </div>
      <div>
        <h2 className="text-lg text-slate-50">10min</h2>
        <h2 className="text-lg text-slate-50">
          Average time traveled from here
        </h2>
      </div>
    </div>
  );
}

export async function loader() {
  const station = await getStation("511");
  return station;
}

export default StationView;
