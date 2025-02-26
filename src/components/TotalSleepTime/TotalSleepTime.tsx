import { lineY, ruleY } from "@observablehq/plot";
import PlotFigure from "../PlotFigure";
import { MOCK_SLEEP } from "../../data";
import { getLineChartData } from "../../utils/lineChart";

const TotalSleepTime = () => {
  const SLEEP_GOALS = 9;

  const finalGoalData = MOCK_SLEEP.map(({ date }) => ({
    date: new Date(date),
    goal: SLEEP_GOALS,
  }));
  const finalData = getLineChartData(MOCK_SLEEP);

  return (
    <PlotFigure
      options={{
        y: {
          domain: [0, 10],
        },
        marks: [
          ruleY([0]),
          lineY(finalGoalData, {
            x: "date",
            y: "goal",
            stroke: "#F4A261",
          }),
          lineY(finalData, {
            x: "date",
            y: "hours",
            tip: true,
            stroke: "#4C9AFF",
          }),
        ],
      }}
    />
  );
};

export default TotalSleepTime;
