import { useState } from "react";
import { useParams } from "react-router";

import { MessageType } from "../../interface";
import MessageInput from "../message-input";
import MessageList from "../message-list";

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
    chatMessages[id] ?? [],
  );

  if (!(id === "Amanda" || id === "Jessica")) return;

  return (
    <div className="flex h-full flex-col gap-2.5 px-7.5 py-8.5">
      <MessageList messages={messages} />

      <MessageInput setMessages={setMessages} />
    </div>
  );
};

export default ChatRoom;
