import { useState } from "react";
import clsx from "clsx";

import ArrowIcon from "../arrow";

const Dropdown = ({ defaultValue, options }: DropdownType) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <div className="relative w-full">
        <div
          className={clsx(
            "border-grey-200-50 flex h-fit w-full items-center rounded-md border px-4",
            isDropdownOpen && "rounded-b-none",
          )}
          onClick={(e) => {
            setIsDropdownOpen((prev) => !prev);
            e.stopPropagation();
          }}
        >
          <div className="w-full">{defaultValue}</div>
          <div>
            <ArrowIcon />
          </div>
        </div>

        <div
          className={clsx(
            "border-grey-200-50 absolute z-10 max-h-75 w-full -translate-y-0.25 overflow-y-scroll rounded-b-md border bg-white",
            { hidden: !isDropdownOpen },
          )}
        >
          {options.map((option) => (
            <div
              key={option}
              className="border-grey-200-50 w-full border-b p-4"
              onClick={() => setIsDropdownOpen(false)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>

      <div
        className={clsx("absolute top-0 left-0 h-full w-full", {
          hidden: !isDropdownOpen,
        })}
        onClick={() => setIsDropdownOpen(false)}
      />
    </>
  );
};

export default Dropdown;

interface DropdownType {
  defaultValue: string;
  options: string[];
}
