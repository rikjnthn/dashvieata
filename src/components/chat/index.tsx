import { useNavigate } from "react-router";

const Chat = ({ message, name, profilePictureSrc }: ChatType) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={(e) => {
        navigate("/messages/" + name);
        e.stopPropagation();
      }}
      className="flex gap-2.5 px-6.5 py-4"
    >
      <div>
        <img
          className="h-12.5 w-12.5 rounded-full object-cover object-center"
          src={profilePictureSrc}
          alt={name}
        />
      </div>

      <div>
        <div className="font-medium">{name}</div>
        <div className="text-sm">{message}</div>
      </div>
    </div>
  );
};

export default Chat;

interface ChatType {
  profilePictureSrc: string;
  name: string;
  message: string;
}
