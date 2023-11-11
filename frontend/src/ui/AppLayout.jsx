// Import modules
import { Outlet, useNavigation } from "react-router-dom";

// Custom components
import Header from "./Header";
import Loader from "./Loader";
import MobileFooter from "./MobileFooter";

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
      <MobileFooter />
    </div>
  );
}

export default AppLayout;
