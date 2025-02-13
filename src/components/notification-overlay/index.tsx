import { useState } from "react";
import clsx from "clsx";

import BellIcon from "../bell-icon";
import CloseIcon from "../close-icon";
import Notification from "../notification";

const NotificationOverlay = () => {
  const [isOpenOverlay, setIsOpenOverlay] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <div
          onClick={() => setIsOpenOverlay(true)}
          className="hover:bg-grey-200-50 rounded-full"
        >
          <BellIcon />
        </div>

        <div
          className={clsx(
            "border-grey-200-50 absolute right-0 z-10 w-100 rounded-md border bg-white",
            { hidden: !isOpenOverlay },
          )}
        >
          <div className="flex justify-end stroke-black p-2.5">
            <div
              onClick={() => setIsOpenOverlay(false)}
              className="hover:bg-grey-200-50 rounded-full"
            >
              <CloseIcon title="Close" />
            </div>
          </div>

          <div className="max-h-100 overflow-x-hidden overflow-y-auto">
            <Notification />
          </div>
        </div>
      </div>

      <div
        className={clsx("absolute top-0 left-0 h-full w-full", {
          hidden: !isOpenOverlay,
        })}
        onClick={() => setIsOpenOverlay(false)}
      />
    </>
  );
};

export default NotificationOverlay;
