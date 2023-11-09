import { useLoaderData } from "react-router-dom";
import { getStation, getJourneyStats } from "../services/apiStation";

function StationView() {
  const stationData = useLoaderData();

  // Extract properties from station
  const { station_name, station_address } = stationData.station.station;

  // Extract properties from journeyData
  let {
    numberOfJourneysStarting,
    numberOfJourneysEnding,
    averageDistanceOfJourneysStarting,
    averageDurationOfJourneysStarting,
  } = stationData.journeyData;

  // Round distance
  averageDistanceOfJourneysStarting = Math.round(
    averageDistanceOfJourneysStarting / 100
  );

  // Round duration
  averageDurationOfJourneysStarting = Math.round(
    averageDurationOfJourneysStarting / 60
  );

  return (
    <div className="max-w-full m-4 pb-4 bg-slate-700 rounded-xl shadow-md text-center">
      <img
        className="rounded-t-xl"
        src="https://images.pexels.com/photos/34646/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Image of a bike station"
      />
      <div className="my-5">
        <h1 className="text-2xl text-slate-50">{station_name}</h1>
        <h2 className="text-lg text-slate-400">{station_address}</h2>
      </div>
      <dl className="grid grid-cols-2 gap-8 mx-auto p-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-extrabold text-blue-300">
            {numberOfJourneysStarting}
          </h2>
          <h2 className="text-lg text-slate-50">Journeys starting</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-extrabold text-blue-300">
            {numberOfJourneysEnding}
          </h2>
          <h2 className="text-lg text-slate-50">Journeys ending</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-extrabold text-blue-300">
            {averageDistanceOfJourneysStarting} km
          </h2>
          <h2 className="text-lg text-slate-50">
            Average distance traveled from
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-extrabold text-blue-300">
            {averageDurationOfJourneysStarting} min
          </h2>
          <h2 className="text-lg text-slate-50">Average time traveled from</h2>
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
