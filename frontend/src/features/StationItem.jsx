import { Link } from "react-router-dom";

function StationItem({ station }) {
  return (
    <Link to={`/station/${station.id}`}>
      <li className="py-4 bg-slate-700 rounded shadow-md hover:bg-slate-600">
        <div className="min-w-0 gap-x-4 ml-3">
          <p className="text-sm font-medium text-slate-50">
            {station.station_name}
          </p>
          <p className="text-sm text-slate-500 truncate">
            {station.station_address}
          </p>
        </div>
      </li>
    </Link>
  );
}

export default StationItem;
