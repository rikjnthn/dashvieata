import { useNavigate } from "react-router";
import ChatList from "../chat-list";
import GotoIcon from "../go-to-icon";
import { useSetting } from "../../context/setting-context";

const MessageOverview = () => {
  const navigate = useNavigate();
  const { fontSize } = useSetting();

  return (
    <div
      onClick={() => navigate("/messages")}
      className="border-grey-200/50 h-full border px-2.5 select-none dark:text-white"
    >
      <div className="flex justify-between px-4 py-2.5">
        <div
          className="font-medium"
          style={{
            fontSize: fontSize.biggest,
            lineHeight: "1.56",
          }}
        >
          Messages
        </div>
        <GotoIcon />
      </div>

      <ChatList />
    </div>
  );
};

export default MessageOverview;
