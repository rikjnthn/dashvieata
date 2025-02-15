import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Chart } from "chart.js/auto";

import { dates, revenueData } from "../../data/revenue";

const Graph = () => {
  const [isSmooth, setIsSmooth] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: dates.slice(0, 30),
        datasets: [
          {
            label: "revenue",
            data: revenueData.slice(0, 30),
            tension: isSmooth ? 0.4 : 0,
          },
        ],
      },
    });

    return () => chart.destroy();
  }, [isSmooth]);

  return (
    <div className="border-grey-200-50 w-full border p-4">
      <div className="flex items-center justify-between">
        <div className="text-lg font-medium">Revenue</div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2.5 p-2.5">
            <div>Smooth line</div>
            <div
              title="Smooth line"
              tabIndex={0}
              onClick={() => setIsSmooth((prev) => !prev)}
              className={clsx("switch border", {
                "switch-true border-blue-200 bg-blue-200": isSmooth,
                "border-grey-700": !isSmooth,
              })}
            />
          </div>
        </div>
      </div>

      <div className="h-full w-full">
        <canvas ref={canvasRef} width="100px" />
      </div>
    </div>
  );
};

export default Graph;
