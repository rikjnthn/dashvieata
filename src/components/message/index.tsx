import clsx from "clsx";

import { MessageType } from "../../interface";

const Message = ({ content, sender, image }: MessageType) => {
  return (
    <div className="message">
      <div
        className={clsx(
          "flex flex-col rounded-t-md",
          sender ? "ml-auto rounded-bl-md" : "rounded-br-md",
        )}
      >
        {image ? (
          <img
            className="h-full w-full rounded-md object-contain py-1"
            src={image}
            alt="image"
          />
        ) : null}

        {content ? <div>{content}</div> : null}
      </div>
      <svg
        className={clsx(
          "absolute -bottom-1",
          sender ? "right-0" : "flipped left-0",
        )}
        width="17"
        height="8"
        viewBox="0 0 17 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.83548L17 0.83548V6.03387C17 6.73839 16.2909 7.22203 15.635 6.96488L0 0.83548Z"
          fill="#005580"
        />
      </svg>
    </div>
  );
};

export default Message;
