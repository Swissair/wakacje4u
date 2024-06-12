export interface ApiResponse<T> {
  data: T;
  status: string;
}

export interface IRange {
  startDate?: Date;
  endDate?: Date;
  key: string;
}

export interface ReservationSettings {
  minDaysOfStay: number;
  datesUnavailable: Date[];
}

export interface Enquiry {
  fullName: string;
  email: string;
  title: string;
  message: string;
  dateRange: IRange;
}

export const toIsoRange = (inputRange: IRange): IRange => {

  const start = inputRange.startDate != null ? new Date(inputRange.startDate.toISOString()) : undefined;
  const end = inputRange.endDate != null ? new Date(inputRange.endDate.toISOString()) : undefined;

  return { startDate: start, endDate: end, key: inputRange.key };
};

export const getImageUrl = (name: string, ext: string): string => {
  return new URL(`./assets/images/${name}.${ext}`, import.meta.url).href;
};
