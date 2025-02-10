import { Outlet, useLocation } from "react-router";
import clsx from "clsx";

import HeaderNav from "../components/header-nav";

function WithHeader() {
  const pathname = useLocation().pathname;

  return (
    <div
      className={clsx(
        "w-full min-w-0 px-4",
        pathname !== "/" ? "py-12" : "py-7",
      )}
    >
      <HeaderNav />
      <Outlet />
    </div>
  );
}

export default WithHeader;
