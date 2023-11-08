import { useLoaderData } from "react-router-dom";
import { getStation, getJourneyStats } from "../services/apiStation";

function StationView() {
  const stationData = useLoaderData();

  // Extract properties from station
  const { station_name, station_address } = stationData.station.station;

  // Extract properties from journeyData
  const {
    numberOfJourneysStarting,
    numberOfJourneysEnding,
    averageDistanceOfJourneysStarting,
    averageDurationOfJourneysStarting,
  } = stationData.journeyData;

  return (
    <div className="p-4 bg-slate-700 rounded shadow-md">
      <h1 className="text-2xl text-slate-50">{station_name}</h1>
      <h2 className="text-lg text-slate-50">{station_address}</h2>
      <dl className="grid grid-cols-2 gap-8 mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg text-slate-50">{numberOfJourneysStarting}</h2>
          <h2 className="text-lg text-slate-50">Journeys starting here</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg text-slate-50">{numberOfJourneysEnding}</h2>
          <h2 className="text-lg text-slate-50">Journeys ending here</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg text-slate-50">
            {averageDistanceOfJourneysStarting}
          </h2>
          <h2 className="text-lg text-slate-50">
            Average distance traveled from here
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-lg text-slate-50">
            {averageDurationOfJourneysStarting}
          </h2>
          <h2 className="text-lg text-slate-50">
            Average time traveled from here
          </h2>
        </div>
      </dl>
    </div>
  );
}

export async function loader({ params }) {
  const station = await getStation(params.stationId);
  const journeyData = await getJourneyStats(params.stationId);

  // Combine station and journeyData into one object
  const combinedData = {
    station: station,
    journeyData: journeyData,
  };

  return combinedData;
}

export default StationView;
