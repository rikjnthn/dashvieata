import { useState } from "react";
import { Link, useParams } from "react-router";

import { MessageType } from "../../interface";
import MessageInput from "../message-input";
import MessageList from "../message-list";
import BackIcon from "../back-icon";

const chatMessages = {
  Amanda: [
    {
      sender: false,
      content: "Hi! I want to ask you about your product",
      image: "",
    },
    {
      sender: true,
      content: "Hello!",
      image: "",
    },
    {
      sender: true,
      content: "What product you had like to asked?",
      image: "",
    },
  ],
  Jessica: [
    {
      sender: false,
      content: "Thank you! Your t-shirt is wonderfull",
      type: "text" as const,
    },
  ],
};

const ChatRoom = () => {
  const id = useParams().id as "Amanda" | "Jessica";

  const [messages, setMessages] = useState<MessageType[]>(
    id ? chatMessages[id] : [],
  );

  return (
    <div className="dark:bg-grey-900 top-0 left-0 flex h-full w-full flex-col gap-2.5 bg-white px-7.5 py-8.5 max-md:absolute max-md:pt-4">
      <Link to="/messages" className="flex md:hidden">
        <BackIcon />
      </Link>

      <MessageList messages={messages} />

      <MessageInput setMessages={setMessages} />
    </div>
  );
};

export default ChatRoom;
