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
    <div className="layout pb-20">
      {isLoading && <Loader />}

      <Header />
      <main className="mx-3">
        <Outlet />
      </main>
      <MobileFooter />
    </div>
  );
}

export default AppLayout;
