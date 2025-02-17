import { useState } from "react";
import clsx from "clsx";

import ArrowIcon from "../arrow";
import { useSetting } from "../../context/setting-context";

const Dropdown = ({
  defaultValue,
  options,
  onOptionClick,
}: DropdownPropsType) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const { fontSize } = useSetting();

  return (
    <>
      <div className="relative">
        <div
          className={clsx(
            "border-grey-200/50 flex h-fit w-full items-center rounded-md border px-4",
            isDropdownOpen && "rounded-b-none",
          )}
          onClick={(e) => {
            setIsDropdownOpen((prev) => !prev);
            e.stopPropagation();
          }}
        >
          <div
            className="w-full"
            style={{
              fontSize: fontSize.normal,
            }}
          >
            {defaultValue}
          </div>
          <div>
            <ArrowIcon title="Open" size="md" />
          </div>
        </div>

        <div
          className={clsx(
            "border-grey-200/50 dark:bg-grey-900 scroll-dark absolute z-10 max-h-75 w-full -translate-y-0.25 overflow-y-auto rounded-b-md border bg-white",
            { hidden: !isDropdownOpen },
          )}
          style={{
            fontSize: fontSize.normal,
            lineHeight: "1.56",
          }}
        >
          {options.map((optionValue) => (
            <option
              key={optionValue}
              className="border-grey-200/50 w-full border-b p-4"
              onClick={() => {
                if (onOptionClick) onOptionClick(optionValue);

                setIsDropdownOpen(false);
              }}
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

interface DropdownPropsType {
  defaultValue: string;
  options: Readonly<string[]>;
  onOptionClick?: (option: string) => void;
}
