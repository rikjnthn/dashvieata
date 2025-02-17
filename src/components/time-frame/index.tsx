import { useState } from "react";
import clsx from "clsx";

import { TIMEFRAMEOPTIONS } from "../../constant/setting";
import ArrowIcon from "../arrow";
import { useSetting } from "../../context/setting-context";
import { TimeFrameType } from "../../interface";

const TimeFrame = ({ setTimeFrame, timeFrame }: TimeFramePropsType) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const { fontSize } = useSetting();

  return (
    <>
      <div className="relative w-50 select-none dark:text-white">
        <div
          className={clsx(
            "border-grey-200/50 flex h-fit w-full items-center rounded-md border px-4",
            isDropdownOpen && "rounded-b-none",
          )}
          onClick={(e) => {
            setIsDropdownOpen((prev) => !prev);
            e.stopPropagation();
          }}
          style={{
            fontSize: fontSize.normal,
            lineHeight: "1.56",
          }}
        >
          <div
            className="w-full py-2.5"
            style={{
              fontSize: fontSize.bigger,
              lineHeight: "1.56",
            }}
          >
            {timeFrame}
          </div>
          <div>
            <ArrowIcon title="Open" size="sm" />
          </div>
        </div>

        <div
          className={clsx(
            "border-grey-200/50 dark:bg-grey-900 dark:scroll-dark absolute z-10 max-h-75 w-full -translate-y-0.25 overflow-y-auto rounded-b-md border bg-white",
            { hidden: !isDropdownOpen },
          )}
          style={{
            fontSize: fontSize.bigger,
            lineHeight: "1.56",
          }}
        >
          {TIMEFRAMEOPTIONS.map((optionValue) => (
            <option
              key={optionValue}
              className="border-grey-200/50 w-full border-b p-4"
              onClick={() => {
                setIsDropdownOpen(false);

                setTimeFrame(optionValue);
              }}
              value={optionValue}
            >
              {optionValue}
            </option>
          ))}
        </div>
      </div>

      <div
        className={clsx("absolute top-0 left-0 h-full w-full select-none", {
          hidden: !isDropdownOpen,
        })}
        onClick={() => setIsDropdownOpen(false)}
      />
    </>
  );
};

export default TimeFrame;

interface TimeFramePropsType {
  timeFrame: TimeFrameType;
  setTimeFrame: (option: TimeFrameType) => void;
}
