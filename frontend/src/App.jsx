import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StationList from "./features/StationList";
import StationView from "./features/StationView";
import { loader as stationLoader } from "./features/StationView";
import { loader as stationListLoader } from "./features/StationList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StationList />,
    loader: stationListLoader,
  },
  {
    path: "/station/:stationId",
    element: <StationView />,
    loader: stationLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
