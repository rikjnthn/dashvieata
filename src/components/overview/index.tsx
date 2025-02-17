import clsx from "clsx";

import { useSetting } from "../../context/setting-context";
import { TimeFrameType } from "../../interface";
import DirectArrow from "../direct-arrow";

const Overview = ({ label, timeFrame, value, growth }: OverviewPropsType) => {
  const { fontSize } = useSetting();

  const isGrowing = growth > 0;

  return (
    <div className="border-grey-200/50 w-full max-w-100 rounded-md border p-4 dark:text-white">
      <div
        className="font-medium"
        style={{
          fontSize: fontSize.biggest,
          lineHeight: "1.56",
        }}
      >
        {label}
      </div>
      <div className="flex items-center justify-between pt-2.5 pb-4">
        <div
          className="text-3xl font-medium"
          style={{
            fontSize: fontSize.largest,
            lineHeight: "1.56",
          }}
        >
          $ {value}
        </div>
        <div
          className={clsx(
            "flex h-fit w-fit items-center rounded-md px-2.5 py-1.25",
            isGrowing ? "bg-green-500/50" : "bg-red-500/50",
          )}
        >
          <div
            className={clsx(
              isGrowing ? "fill-green-300" : "rotate-180 fill-red-500",
            )}
          >
            <DirectArrow title="Increase" />
          </div>
          <span
            className={clsx(
              "font-medium",
              isGrowing ? "text-green-500 dark:text-green-300" : "text-red-500",
            )}
            style={{
              fontSize: fontSize.small,
              lineHeight: "1.56",
            }}
          >
            {isGrowing && "+"}
            {parseFloat((growth * 100).toFixed(2))}%
          </span>
        </div>
      </div>
      <div
        className="text-grey-700 text-xs font-light dark:text-gray-100"
        style={{
          fontSize: fontSize.small,
          lineHeight: "1.56",
        }}
      >
        {timeFrame}
      </div>
    </div>
  );
};

export default Overview;

interface OverviewPropsType {
  label: string;
  value: string;
  timeFrame: TimeFrameType;
  growth: number;
}
