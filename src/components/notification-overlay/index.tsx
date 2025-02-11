import BellIcon from "../bell-icon";
import CloseIcon from "../close-icon";
import Notification from "../notification";

const NotificationOverlay = () => {
  return (
    <div className="relative">
      <BellIcon />

      <div className="border-grey-200-50 absolute right-0 w-100 rounded-md border bg-white">
        <div className="flex justify-end stroke-black p-2.5">
          <CloseIcon title="Close" />
        </div>

        <div className="max-h-100 overflow-y-auto">
          <Notification />
        </div>
      </div>
    </div>
  );
};

export default NotificationOverlay;
