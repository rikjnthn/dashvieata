import { Outlet } from "react-router";

import HeaderNav from "../components/header-nav";

function WithHeader() {
  return (
    <div className="flex w-full min-w-0 flex-col px-4 py-12">
      <HeaderNav />
      <Outlet />
    </div>
  );
}

export default WithHeader;
