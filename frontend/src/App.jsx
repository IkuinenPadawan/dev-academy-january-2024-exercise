import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StationList from "./features/StationList";
import StationView from "./features/StationView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StationList />,
  },
  {
    path: "/station/:stationId",
    element: <StationView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
