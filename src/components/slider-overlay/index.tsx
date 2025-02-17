import { useState } from "react";
import SliderIcon from "../slider-icon";
import clsx from "clsx";
import CloseIcon from "../close-icon";
import Dropdown from "../dropdown";
import { STATUS } from "../../constant/setting";
import { TransactionStatusType } from "../../interface";

const SliderOverlay = ({
  setTransactionStatus,
  transactionStatus,
}: SliderOverlayPropsType) => {
  const [isOpenOverlay, setIsOpenOverlay] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <div
          onClick={() => setIsOpenOverlay(true)}
          className="hover:bg-grey-200/50 rounded-full"
        >
          <SliderIcon />
        </div>

        <div
          className={clsx(
            "border-grey-200/50 dark:bg-grey-900 absolute right-0 z-10 w-100 rounded-md border bg-white",
            { hidden: !isOpenOverlay },
          )}
        >
          <div className="flex justify-end stroke-black p-2.5">
            <div
              onClick={() => setIsOpenOverlay(false)}
              className="hover:bg-grey-200/50 rounded-full dark:stroke-white"
            >
              <CloseIcon title="Close" />
            </div>
          </div>

          <div className="max-h-100 cursor-pointer dark:text-white">
            <div className="flex items-center justify-between p-5">
              <div>Status</div>
              <div>
                <Dropdown
                  defaultValue={transactionStatus}
                  options={STATUS}
                  onOptionClick={(option) => {
                    setTransactionStatus(option as TransactionStatusType);
                  }}
                />
              </div>
            </div>
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

export default SliderOverlay;

interface SliderOverlayPropsType {
  setTransactionStatus: (option: TransactionStatusType) => void;
  transactionStatus: TransactionStatusType;
}
