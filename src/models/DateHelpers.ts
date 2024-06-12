import { IRange } from "./Domain";
import { addDays } from "date-fns";

export const getDaysWithinRange = (range: IRange): Date[] => {
  let currentDate = range.startDate;
  const result: Date[] = [];

  if(currentDate === null || range.endDate === null)
    {return []}

  while (currentDate != null && range.endDate != null && ( currentDate <= range.endDate )) {
    result.push(currentDate);
    currentDate = addDays(currentDate, 1);
  }

  return result;
};
