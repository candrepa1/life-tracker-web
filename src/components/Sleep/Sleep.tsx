import { BarChart, LineChart } from "reaviz";

import { MOCK_SLEEP } from "../../data";
import { getBarChartData } from "../../utils/barChart";
import { getLineChartData } from "../../utils/lineChart";

const Sleep = () => {
  const barChartdata = getBarChartData(MOCK_SLEEP);
  const lineChartData = getLineChartData(MOCK_SLEEP);

  return (
    <>
      <BarChart height={300} width={300} data={barChartdata} />
      <LineChart height={300} width={300} data={lineChartData} />
    </>
  );
};

export default Sleep;
