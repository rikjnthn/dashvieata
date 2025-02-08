import { Outlet } from "react-router";

import Navigation from "./components/navigation";

function Layout() {
  return (
    <div className="flex h-full">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
