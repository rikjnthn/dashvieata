import ChatIcon from "../chat-icon";
import CloseIcon from "../close-icon";

const Notification = () => {
  return (
    <div className="border-grey-200-50 flex w-full items-center gap-5 border-y p-2.5">
      <div className="stroke-black">
        <ChatIcon />
      </div>

      <div>
        <div className="mb-1.25 font-medium">Messages</div>
        <div className="text-sm">You have 1 new messages</div>
      </div>

      <div className="ml-auto rounded-md stroke-black hover:bg-red-500 hover:stroke-white">
        <CloseIcon title="Remove" />
      </div>
    </div>
  );
};

export default Notification;
