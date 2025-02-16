import { Outlet } from "react-router";

import Navigation from "./components/navigation";
import { SettingProvider } from "./context/setting-context";

function Layout() {
  return (
    <div className="flex h-full w-full">
      <SettingProvider>
        <Navigation />
        <Outlet />
      </SettingProvider>
    </div>
  );
}

export default Layout;
