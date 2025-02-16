import clsx from "clsx";
import { useSetting } from "../../context/setting-context";

const ArrowIcon = ({ title, size }: ArrowIconPropsType) => {
  const { colorScheme } = useSetting();

  return (
    <div title={title}>
      <svg
        width={clsx({ "40": size === "md", "25": size === "sm" })}
        height={clsx({ "40": size === "md", "25": size === "sm" })}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 15.2L18.5858 23.7858C19.3668 24.5668 20.6332 24.5668 21.4142 23.7858L30 15.2"
          stroke={colorScheme === "Dark" ? "#ffffff" : "#000000"}
          strokeWidth={clsx({ "2": size === "md", "3": size === "sm" })}
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default ArrowIcon;

interface ArrowIconPropsType {
  title?: string;
  size: "sm" | "md";
}
