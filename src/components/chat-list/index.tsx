import { useSetting } from "../../context/setting-context";
import Chat from "../chat";

const chatContacts = [
  {
    profilePictureSrc: "/user1.jpg",
    name: "Amanda",
    message: "You: What product you had like to asked?",
  },
  {
    profilePictureSrc: "/user2.jpg",
    name: "Jessica",
    message: "Thank you! Your t-shirt is wonderfull",
  },
];

const ChatList = ({ search }: ChatListProps) => {
  const { fontSize } = useSetting();

  return (
    <div
      className="cursor-pointer dark:text-white"
      style={{
        fontSize: fontSize.bigger,
        lineHeight: "1.56",
      }}
    >
      {chatContacts
        .filter((contact) => {
          return contact.name
            .toLowerCase()
            .startsWith(search?.toLowerCase() ?? "");
        })
        .map((contact) => {
          return <Chat key={contact.name} {...contact} />;
        })}
    </div>
  );
};

export default ChatList;

interface ChatListProps {
  search?: string;
}
