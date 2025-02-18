import React, { Suspense } from "react";

import useTimeFrame from "../hooks/use-time-frame";
import HeaderNav from "../components/header-nav";
import MessageOverview from "../components/message-overview";
import NotificationOverlay from "../components/notification-overlay";
import Overview from "../components/overview";
import TimeFrame from "../components/time-frame";
import Transactions from "../components/transactions";
import { revenueData } from "../data/revenue";
import Loading from "../components/loading";

const currencyFormat = new Intl.NumberFormat("en-us");

const Graph = React.lazy(() => import("../components/graph"));

function Dashboard() {
  const { setTimeFrame, timeFrame } = useTimeFrame();

  const timeFrameInNumber = parseInt(timeFrame.split(" ")[1]);
  const revenueTotal = revenueData
    .slice(0, timeFrameInNumber)
    .reduce((prev, curr) => prev + curr, 0);

  const averageOrderValue = parseFloat(
    (
      revenueData
        .slice(0, timeFrameInNumber)
        .reduce((prev, curr) => prev + curr, 0) /
      (timeFrameInNumber * 30)
    ).toFixed(2),
  );

  return (
    <div className="dark:bg-grey-900 flex w-full min-w-0 flex-col gap-2.5 px-4 py-12">
      <HeaderNav>
        <div className="ml-auto flex items-center gap-2.5">
          <TimeFrame setTimeFrame={setTimeFrame} timeFrame={timeFrame} />
          <NotificationOverlay />
        </div>
      </HeaderNav>

      <div className="flex h-full flex-col gap-2.5 overflow-x-clip overflow-y-scroll">
        <div className="flex gap-2.5 pt-5.5 max-lg:flex-col">
          <div className="flex w-full flex-col gap-2.5">
            <div className="flex w-full gap-2.5 max-md:flex-col md:gap-4">
              <Overview
                label="Revenue"
                timeFrame={timeFrame}
                value={currencyFormat.format(revenueTotal)}
                growth={-0.105}
              />
              <Overview
                label="Average Order Value"
                timeFrame={timeFrame}
                value={currencyFormat.format(averageOrderValue)}
                growth={-0.011}
              />
            </div>

            <Suspense fallback={<Loading />}>
              <Graph timeFrame={timeFrameInNumber} />
            </Suspense>
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
