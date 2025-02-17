import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import ChatIcon from "../chat-icon";
import CloseIcon from "../close-icon";
import { useSetting } from "../../context/setting-context";

const Notification = () => {
  const [isRemoved, setIsRemoved] = useState<boolean>(false);

  const notificationRef = useRef<HTMLDivElement>(null);

  const { fontSize } = useSetting();

  useEffect(() => {
    const removeNotification = () => {
      notificationRef.current?.classList.add("hidden");
    };

    const notificationEl = notificationRef.current;

    notificationEl?.addEventListener("transitionend", removeNotification);

    return () =>
      notificationEl?.removeEventListener("transitionend", removeNotification);
  }, []);

  return (
    <div
      ref={notificationRef}
      className={clsx(
        "border-grey-200/50 hover:bg-grey-200/50 notification-transition dark:hover:bg-grey-800 flex w-full items-center gap-2.5 border-y p-2.5 sm:gap-5",
        { "-translate-x-full": isRemoved },
      )}
    >
      <div className="stroke-black dark:stroke-white">
        <ChatIcon />
      </div>

      <div className="w-full dark:text-white">
        <div
          className="mb-1.25 font-medium"
          style={{
            fontSize: fontSize.bigger,
            lineHeight: "1.56",
          }}
        >
          Messages
        </div>
        <div
          className="w-38 truncate text-ellipsis"
          style={{
            fontSize: fontSize.normal,
            lineHeight: "1.56",
          }}
        >
          You have 1 new messages
        </div>
      </div>

      <div
        onClick={() => setIsRemoved(true)}
        className="ml-auto rounded-md stroke-black hover:bg-red-500 hover:stroke-white dark:stroke-white"
      >
        <CloseIcon title="Remove" />
      </div>
    </div>
  );
};

export default Notification;
