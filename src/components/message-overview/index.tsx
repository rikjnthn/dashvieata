import { useNavigate } from "react-router";
import ChatList from "../chat-list";
import GotoIcon from "../go-to-icon";

const MessageOverview = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/messages")}
      className="border-grey-200-50 h-full border px-2.5 select-none"
    >
      <div className="flex justify-between px-4 py-2.5">
        <div className="text-lg font-medium">Messages</div>
        <GotoIcon />
      </div>

      <ChatList />
    </div>
  );
};

export default MessageOverview;
