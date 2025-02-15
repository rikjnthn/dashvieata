import { Outlet, useParams } from "react-router";

import ChatList from "../components/chat-list";

function MessagesPage() {
  const id = useParams().id;

  return (
    <div className="border-grey-200-50 mt-7.5 flex h-full overflow-hidden rounded-md border">
      <div className="border-grey-200-50 w-full max-w-100 border-r py-0.5">
        <ChatList />
      </div>

      <div key={id} className="w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default MessagesPage;
