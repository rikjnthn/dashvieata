import Graph from "../components/graph";
import MessageOverview from "../components/message-overview";
import Overview from "../components/overview";
import Transactions from "../components/transactions";

function Dashboard() {
  return (
    <div className="flex h-full flex-col gap-2.5 overflow-x-clip overflow-y-scroll">
      <div className="flex gap-2.5 pt-5.5">
        <div className="flex w-full flex-col gap-2.5">
          <div className="flex w-full gap-4">
            <Overview
              label="Revenue"
              timeFrame="Last 30 days"
              value="45,546.00"
              growthPercentage="+20%"
            />
            <Overview
              label="Average Order Value"
              timeFrame="Last 30 days"
              value="56.00"
              growthPercentage="+20%"
            />
          </div>

          <Graph />
        </div>

        <div className="w-full">
          <MessageOverview />
        </div>
      </div>

      <Transactions withBorder />
    </div>
  );
}

export default Dashboard;
