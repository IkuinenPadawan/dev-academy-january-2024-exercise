// Import modules
import { Outlet, useNavigation } from "react-router-dom";

// Custom components
import Header from "./Header";
import Loader from "./Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="layout">
      {isLoading && <Loader />}

      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
