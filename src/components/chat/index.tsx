import clsx from "clsx";
import { useMatch, useNavigate } from "react-router";
import { useSetting } from "../../context/setting-context";

const Chat = ({ message, name, profilePictureSrc }: ChatPropsType) => {
  const navigate = useNavigate();
  const isMatch = useMatch("/messages/" + name);
  const { fontSize } = useSetting();

  return (
    <div
      onClick={(e) => {
        navigate("/messages/" + name);
        e.stopPropagation();
      }}
      className={clsx("flex gap-2.5 px-6.5 py-4", {
        "bg-dark-cyan-900 text-white": isMatch,
      })}
    >
      <div>
        <img
          className="h-12.5 w-12.5 rounded-full object-cover object-center"
          src={profilePictureSrc}
          alt={name}
          style={{
            fontSize: fontSize.normal,
            lineHeight: "1.56",
          }}
        />
      </div>

      <div>
        <div className="font-medium">{name}</div>
        <div
          style={{
            fontSize: fontSize.normal,
            lineHeight: "1.56",
          }}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default Chat;

interface ChatPropsType {
  profilePictureSrc: string;
  name: string;
  message: string;
}
