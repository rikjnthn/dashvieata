import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { Chart } from "chart.js/auto";

import { dates, revenueData } from "../../data/revenue";
import { useSetting } from "../../context/setting-context";

function getIsSmooth(): boolean {
  if (typeof localStorage === "undefined") return false;

  const isSmooth = localStorage.getItem("is-graph-smooth");

  if (!isSmooth) return false;

  return JSON.parse(isSmooth);
}

const Graph = ({ timeFrame }: GraphPropsType) => {
  const [isSmooth, setIsSmooth] = useState<boolean>(getIsSmooth);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const { fontSize, colorScheme } = useSetting();

  useEffect(() => {
    if (!canvasRef.current) return;

    const fontOptions = {
      font: {
        size: parseInt(fontSize.small.slice(0, fontSize.small.length - 2)),
      },
      color: colorScheme === "Dark" ? "#ffffff" : "#000000",
    };

    const chart = new Chart(canvasRef.current, {
      type: "line",
      data: {
        labels: dates.slice(0, timeFrame),
        datasets: [
          {
            label: "revenue",
            data: revenueData.slice(0, timeFrame),
            tension: isSmooth ? 0.4 : 0,
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: fontOptions,
          },
          y: {
            ticks: fontOptions,
          },
        },
        plugins: {
          legend: {
            labels: fontOptions,
          },
        },
      },
    });

    return () => chart.destroy();
  }, [isSmooth, fontSize.small, colorScheme, timeFrame]);

  const onSetGraphSmooth = () => {
    setIsSmooth((prev) => {
      if (typeof localStorage !== "undefined") {
        localStorage.setItem("is-graph-smooth", JSON.stringify(!prev));
      }

      return !prev;
    });
  };

  return (
    <div className="border-grey-200/50 w-full border p-4 dark:text-white">
      <div className="flex items-center justify-between">
        <div
          className="font-medium"
          style={{
            fontSize: fontSize.biggest,
            lineHeight: "1.56",
          }}
        >
          Revenue
        </div>
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-2.5 p-2.5">
            <div
              style={{
                fontSize: fontSize.normal,
                lineHeight: "1.56",
              }}
            >
              Smooth line
            </div>
            <div
              title="Smooth line"
              tabIndex={0}
              onClick={onSetGraphSmooth}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSetGraphSmooth();
                }
              }}
              className={clsx("switch border", {
                "switch-true border-blue-200 bg-blue-200": isSmooth,
                "border-grey-700": !isSmooth,
              })}
            />
          </div>
        </div>
      </div>

      <div className="h-full w-full">
        <canvas ref={canvasRef} />
      </div>
    </div>
  );
};

export default Graph;

interface GraphPropsType {
  timeFrame: number;
}
