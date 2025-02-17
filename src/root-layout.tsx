import { useState } from "react";
import { Outlet } from "react-router";

import Navigation from "./components/navigation";
import { SettingProvider } from "./context/setting-context";
import Hamburger from "./components/hamburger";

function Layout() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

  return (
    <div className="flex h-full w-full">
      <SettingProvider>
        <div className="absolute top-15.75 left-6 fill-black dark:fill-white">
          <Hamburger onClick={() => setIsHamburgerOpen(true)} />
        </div>

        <Navigation
          isHamburgerOpen={isHamburgerOpen}
          setIsHamburgerOpen={setIsHamburgerOpen}
        />
        <Outlet />
      </SettingProvider>
    </div>
  );
}

export default Layout;
