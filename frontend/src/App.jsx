// Module imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Custom Components
import StationList from "./features/StationList";
import StationView from "./features/StationView";
import AppLayout from "./ui/AppLayout";

// Loaders
import { loader as stationLoader } from "./features/StationView";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <StationList />,
      },
      {
        path: "/station/:stationId",
        element: <StationView />,
        loader: stationLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
