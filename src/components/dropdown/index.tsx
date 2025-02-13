import { useState } from "react";
import clsx from "clsx";

import ArrowIcon from "../arrow";

const Dropdown = ({ defaultValue, options }: DropdownType) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <>
      <div className="relative">
        <div
          className={clsx(
            "border-grey-200-50 flex h-fit w-full items-center rounded-md border px-4 text-sm",
            isDropdownOpen && "rounded-b-none",
          )}
          onClick={(e) => {
            setIsDropdownOpen((prev) => !prev);
            e.stopPropagation();
          }}
        >
          <div className="w-full">{defaultValue}</div>
          <div>
            <ArrowIcon title="Open" size="md" />
          </div>
        </div>

        <div
          className={clsx(
            "border-grey-200-50 absolute z-10 max-h-75 w-full -translate-y-0.25 overflow-y-scroll rounded-b-md border bg-white",
            { hidden: !isDropdownOpen },
          )}
        >
          {options.map((optionValue) => (
            <option
              key={optionValue}
              className="border-grey-200-50 w-full border-b p-4 text-sm"
              onClick={() => setIsDropdownOpen(false)}
              value={optionValue}
            >
              {optionValue}
            </option>
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
