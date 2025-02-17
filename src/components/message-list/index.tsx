import { useEffect, useRef } from "react";

import { MessageType } from "../../interface";
import Message from "../message";
import { useSetting } from "../../context/setting-context";

const MessageList = ({ messages }: MessageListPropsType) => {
  const lastElRef = useRef<HTMLDivElement>(null);

  const { fontSize } = useSetting();

  useEffect(() => {
    lastElRef.current?.scrollIntoView();
  }, [messages]);

  return (
    <div
      className="mt-auto flex h-fit flex-col gap-2.5 overflow-y-auto"
      style={{
        fontSize: fontSize.normal,
        lineHeight: "1.56",
      }}
    >
      {messages.map((message) => (
        <Message key={Math.random()} {...message} />
      ))}
      <div ref={lastElRef} />
    </div>
  );
};

export default MessageList;

interface MessageListPropsType {
  messages: MessageType[];
}
