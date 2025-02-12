import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

import ChatIcon from "../chat-icon";
import CloseIcon from "../close-icon";

const Notification = () => {
  const [isRemoved, setIsRemoved] = useState(false);

  const notificationRef = useRef<HTMLDivElement>(null);

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
        "border-grey-200-50 hover:bg-grey-200-50 notification-transition flex w-full items-center gap-5 border-y p-2.5",
        { "-translate-x-full": isRemoved },
      )}
    >
      <div className="stroke-black">
        <ChatIcon />
      </div>

      <div>
        <div className="mb-1.25 font-medium">Messages</div>
        <div className="text-sm">You have 1 new messages</div>
      </div>

      <div
        onClick={() => setIsRemoved(true)}
        className="ml-auto rounded-md stroke-black hover:bg-red-500 hover:stroke-white"
      >
        <CloseIcon title="Remove" />
      </div>
    </div>
  );
};

export default Notification;
