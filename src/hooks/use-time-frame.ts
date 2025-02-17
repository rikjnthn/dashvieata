import { useState } from "react";

import { TimeFrameType } from "../interface";
import { TIMEFRAMEOPTIONS } from "../constant/setting";

function getDefaultTimeFrame(): TimeFrameType {
  if (typeof localStorage === "undefined") return "Last 30 days";

  const timeFrame = localStorage.getItem("time-frame") as TimeFrameType;

  if (!timeFrame) return "Last 30 days";
  if (!TIMEFRAMEOPTIONS.includes(timeFrame)) return "Last 30 days";

  return timeFrame;
}

export default function useTimeFrame() {
  const [timeFrame, s] = useState<TimeFrameType>(getDefaultTimeFrame);

  const setTimeFrame = (option: TimeFrameType) => {
    s(option);

    if (typeof localStorage === "undefined") return;

    localStorage.setItem("time-frame", option);
  };

  return { timeFrame, setTimeFrame };
}
