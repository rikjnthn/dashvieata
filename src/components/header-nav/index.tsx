import { useLocation } from "react-router";

import PlusIcon from "../plus-icon";
import SearchBar from "../search-bar";
import BackIcon from "../back-icon";
import TimeFrame from "../time-frame";
import SliderIcon from "../slider-icon";
import NotificationOverlay from "../notification-overlay";

const HeaderNav = () => {
  const pathname = useLocation().pathname;

  return (
    <div className="flex w-full justify-between">
      <div className="flex items-center">
        {(pathname === "/add-product" ||
          pathname.split("/")[1] === "product") && <BackIcon />}
        {["/products", "/transactions", "/messages"].includes(pathname) && (
          <SearchBar />
        )}
      </div>

      <div className="flex items-center">
        {pathname === "/" && <TimeFrame />}
        {pathname === "/products" && <PlusIcon />}
        {pathname === "/transactions" && <SliderIcon />}
        {pathname !== "/settings" && <NotificationOverlay />}
      </div>
    </div>
  );
};

export default HeaderNav;
