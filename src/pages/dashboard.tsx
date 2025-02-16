import Graph from "../components/graph";
import HeaderNav from "../components/header-nav";
import MessageOverview from "../components/message-overview";
import NotificationOverlay from "../components/notification-overlay";
import Overview from "../components/overview";
import TimeFrame from "../components/time-frame";
import Transactions from "../components/transactions";

function Dashboard() {
  return (
    <div className="dark:bg-grey-900 flex w-full min-w-0 flex-col gap-2.5 px-4 py-12">
      <HeaderNav>
        <div className="ml-auto flex items-center gap-2.5">
          <TimeFrame />
          <NotificationOverlay />
        </div>
      </HeaderNav>

      <div className="flex h-full flex-col gap-2.5 overflow-x-clip overflow-y-scroll">
        <div className="flex gap-2.5 pt-5.5">
          <div className="flex w-full flex-col gap-2.5">
            <div className="flex w-full gap-4">
              <Overview
                label="Revenue"
                timeFrame={"Last 30 days"}
                value="45,546.00"
                growthPercentage="+20%"
              />
              <Overview
                label="Average Order Value"
                timeFrame={"Last 30 days"}
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

        <Transactions />
      </div>
    </div>
  );
}

export default Dashboard;
