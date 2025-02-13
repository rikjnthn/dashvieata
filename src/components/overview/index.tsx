import DirectArrow from "../direct-arrow";

const Overview = ({
  label,
  timeFrame,
  value,
  growthPercentage,
}: OverviewType) => {
  return (
    <div className="border-grey-200-50 w-full max-w-100 rounded-md border p-4">
      <div className="text-lg font-medium">{label}</div>
      <div className="flex items-center justify-between pt-2.5 pb-4">
        <div className="text-3xl font-medium">$ {value}</div>
        <div className="flex h-fit w-fit items-center rounded-md bg-green-500/50 px-2.5 py-1.25">
          <div>
            <DirectArrow title="Increase" />
          </div>
          <span className="text-xs font-medium text-green-500">
            {growthPercentage}
          </span>
        </div>
      </div>
      <div className="text-grey-700 text-xs font-light">{timeFrame}</div>
    </div>
  );
};

export default Overview;

interface OverviewType {
  label: string;
  value: string;
  timeFrame: "Last 30 days" | "Last 60 days" | "Last 90 days";
  growthPercentage: string;
}
