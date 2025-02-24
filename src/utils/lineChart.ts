import { Sleep } from "../data/types";

const getLineChartData = (data: Sleep[]) => {
  return data.map(({ date, rating }) => ({
    key: new Date(date),
    data: rating,
  }));
};

export { getLineChartData };
