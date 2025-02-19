import { useState } from "react";
import { Outlet, useParams } from "react-router";
import clsx from "clsx";

import ChatList from "../components/chat-list";
import HeaderNav from "../components/header-nav";
import SearchBar from "../components/search-bar";
import NotificationOverlay from "../components/notification-overlay";

function MessagesPage() {
  const id = useParams().id;

  const [search, setSearch] = useState<string>("");

  return (
    <div className="dark:bg-grey-900 flex w-full min-w-0 flex-col px-4 py-12 md:gap-2.5">
      <HeaderNav>
        <div className={clsx({ "max-md:hidden": id })}>
          <SearchBar setSearch={setSearch} />
        </div>

        <div className="ml-auto">
          <NotificationOverlay />
        </div>
      </HeaderNav>

      <div className="border-grey-200/50 mt-2.5 flex h-full overflow-hidden rounded-md border max-md:relative md:mt-7.5">
        <div className="border-grey-200/50 w-full max-w-100 border-r">
          <ChatList search={search} />
        </div>

        <div key={id} className="w-0 min-w-0 md:w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
