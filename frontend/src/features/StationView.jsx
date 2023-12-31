// Module imports
import { useLoaderData } from "react-router-dom";

// Custom components
import LocationIcon from "../ui/icons/LocationIcon";

// API functions
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
    <div className="max-w-full mx-auto md:max-w-3xl m-4 pb-4 bg-slate-700 rounded-xl shadow-md text-center">
      <img
        className="rounded-t-xl"
        src="../../public/bike_station.jpg"
        alt="Image of a bike station"
      />
      <div className="flex flex-row my-5 justify-center items-center">
        <LocationIcon />
        <div>
          <h1 className="text-2xl">{station_name}</h1>
          <h2 className="text-lg text-slate-400">{station_address}</h2>
        </div>
      </div>
      <dl className="grid grid-cols-2 gap-8 mx-auto p-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-extrabold text-blue-300">
            {numberOfJourneysStarting}
          </h2>
          <h2 className="text-lg ">Journeys starting</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-extrabold text-blue-300">
            {numberOfJourneysEnding}
          </h2>
          <h2 className="text-lg">Journeys ending</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-extrabold text-blue-300">
            {averageDistanceOfJourneysStarting} km
          </h2>
          <h2 className="text-lg">Average distance traveled from</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-extrabold text-blue-300">
            {averageDurationOfJourneysStarting} min
          </h2>
          <h2 className="text-lg">Average time traveled from</h2>
        </div>
      </dl>
    </div>
  );
}

// Loader function to fetch data on render
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
