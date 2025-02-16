import { Outlet, useParams } from "react-router";

import ChatList from "../components/chat-list";
import HeaderNav from "../components/header-nav";
import SearchBar from "../components/search-bar";
import NotificationOverlay from "../components/notification-overlay";

function MessagesPage() {
  const id = useParams().id;

  return (
    <div className="dark:bg-grey-900 flex w-full min-w-0 flex-col gap-2.5 px-4 py-12">
      <HeaderNav>
        <SearchBar />

        <NotificationOverlay />
      </HeaderNav>

      <div className="border-grey-200/50 mt-7.5 flex h-full overflow-hidden rounded-md border">
        <div className="border-grey-200/50 w-full max-w-100 border-r py-0.5">
          <ChatList />
        </div>

        <div key={id} className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MessagesPage;
