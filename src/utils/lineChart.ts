import { Sleep } from "../data/types";

const getLineChartData = (data: Sleep[]) => {
  return data.map(({ date, hours }) => ({
    date: new Date(date),
    hours,
  }));
};

export { getLineChartData };
