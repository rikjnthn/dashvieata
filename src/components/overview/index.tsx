import { useSetting } from "../../context/setting-context";
import DirectArrow from "../direct-arrow";

const Overview = ({
  label,
  timeFrame,
  value,
  growthPercentage,
}: OverviewPropsType) => {
  const { fontSize } = useSetting();

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
        <div className="flex h-fit w-fit items-center rounded-md bg-green-500/50 px-2.5 py-1.25">
          <div>
            <DirectArrow title="Increase" />
          </div>
          <span
            className="font-medium text-green-500 dark:text-green-300"
            style={{
              fontSize: fontSize.small,
              lineHeight: "1.56",
            }}
          >
            {growthPercentage}
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
  timeFrame: "Last 30 days" | "Last 60 days" | "Last 90 days";
  growthPercentage: string;
}
