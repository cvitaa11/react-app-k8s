import { format } from "date-fns";

export const datePickerDateToUtc = (date) => {
  if (!date) return date;

  const stringDate = format(date, "yyyy-MM-dd");
  return `${stringDate}T00:00:00`;
};

export const formatUtcToDate = (date) => {
  if (!date) return date;

  const gtmDate = new Date(date);
  return format(gtmDate, "dd.MM.yyyy");
};

export const formatUtcToYYYYMMDDHH_24MMSS = (date) => {
  if (!date) return date;

  const gtmDate = new Date(date);
  return format(gtmDate, "yyyyMMdd_HHmmss");
};
