import { Sleep } from "../data/types";

const getExcellentSleepCount = (data: Sleep[]) => {
  return data.filter(({ rating }) => rating >= 8).length;
};

const getBarChartData = (data: Sleep[]) => {
  const excellentCount = getExcellentSleepCount(data);

  return [{ key: "excellent", data: excellentCount }];
};

export { getBarChartData };
