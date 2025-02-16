import { useSetting } from "../../context/setting-context";
import Chat from "../chat";

const ChatList = () => {
  const { fontSize } = useSetting();

  return (
    <div
      className="cursor-pointer dark:text-white"
      style={{
        fontSize: fontSize.bigger,
        lineHeight: "1.56",
      }}
    >
      <Chat
        profilePictureSrc="/user1.jpg"
        name="Amanda"
        message="You: What product you had like to asked?"
      />
      <Chat
        profilePictureSrc="/user2.jpg"
        name="Jessica"
        message="Thank you! Your t-shirt is wonderfull"
      />
    </div>
  );
};

export default ChatList;
