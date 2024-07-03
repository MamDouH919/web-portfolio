import moment from "moment";

export const dateFormat = (date, lang) =>
  date
    ? moment(date)
        .locale(lang ?? "en")
        .format("YYYY-MM-DD")
    : null;

export const dateFormatLL = (date, lang) =>
  date ? moment(date).format("ll") : null;

export const dateTimeFormatA = (date, lang) =>
  date ? moment(date).format('D MMMM YYYY h:mm:ss a') : null;

export const dateTimeFormat = (date, lang) =>
  date
    ? moment(date)
        .locale(lang ?? "en")
        .format("YYYY-MM-DD HH:MM:SS")
    : null;
