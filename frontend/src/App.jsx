// Module imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Custom Components
import StationList from "./features/StationList";
import StationView from "./features/StationView";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

// Loaders
import { loader as stationLoader } from "./features/StationView";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <StationList />,
        errorElement: <Error />,
      },
      {
        path: "/station/:stationId",
        element: <StationView />,
        loader: stationLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
