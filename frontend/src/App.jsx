import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StationList from "./features/StationList";
import StationView from "./features/StationView";
import { loader as stationLoader } from "./features/StationView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StationList />,
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
