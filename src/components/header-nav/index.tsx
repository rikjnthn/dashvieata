import { useLocation } from "react-router";

import BellIcon from "../bell-icon";
import PlusIcon from "../plus-icon";
import SearchBar from "../search-bar";
import BackIcon from "../back-icon";
import TimeFrame from "../time-frame";
import SliderIcon from "../slider-icon";

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
        {pathname !== "/settings" && <BellIcon />}
      </div>
    </div>
  );
};

export default HeaderNav;
