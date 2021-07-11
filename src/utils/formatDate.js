export const formatDateIntl = (date) => {
  const localeEN = "en-US";
  const localeES = "es-ES";
  const rawDate = new Date(date);
  return {
    url: new Intl.DateTimeFormat(localeEN).format(rawDate),
    el: new Intl.DateTimeFormat(localeES).format(rawDate),
  };
};

export const formatIntlDate = (date) => {
  return new Date(date);
};
