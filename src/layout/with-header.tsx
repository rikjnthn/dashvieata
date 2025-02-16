import { Outlet } from "react-router";

import HeaderNav from "../components/header-nav";

function WithHeader() {
  return (
    <div className="dark:bg-grey-900 flex w-full min-w-0 flex-col gap-2.5 px-4 py-12">
      <HeaderNav />
      <Outlet />
    </div>
  );
}

export default WithHeader;
