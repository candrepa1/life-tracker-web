export type Categories = {
  id: number;
  name: string;
};

export type Sleep = {
  id: number;
  date: string;
  hours: number;
  rating: number;
};

type ValidRanges = "excellent" | "acceptable" | "poor";

type RangeMinMax = {
  min: number;
  max: number;
};

export type Ranges = Record<ValidRanges, RangeMinMax>;
