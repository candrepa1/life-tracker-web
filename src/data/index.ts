import { Categories, Ranges, Sleep } from "./types";

const MOCK_CATEGORIES: Categories[] = [
  { id: 1, name: "sleep" },
  { id: 2, name: "workout" },
  { id: 3, name: "food" },
];

const MOCK_SLEEP: Sleep[] = [
  { id: 1, date: "2025-02-19", hours: 8, rating: 9 },
  { id: 2, date: "2025-02-20", hours: 5, rating: 5 },
  { id: 3, date: "2025-02-21", hours: 8, rating: 7 },
  { id: 4, date: "2025-02-22", hours: 7, rating: 6 },
  { id: 5, date: "2025-02-23", hours: 9, rating: 7 },
  { id: 6, date: "2025-02-24", hours: 4, rating: 3 },
  { id: 6, date: "2025-02-25", hours: 6, rating: 5 },
];

const SLEEP_RANGES: Ranges = {
  excellent: { min: 8, max: 10 },
  acceptable: { min: 6, max: 8 },
  poor: { min: 0, max: 5 },
};

export { MOCK_CATEGORIES, MOCK_SLEEP, SLEEP_RANGES };
