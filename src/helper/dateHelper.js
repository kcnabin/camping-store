const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const getDateAndTime = (value) => {
  const date = new Date(value);

  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const newDate = date.getDate();
  const day = days[date.getDay()];
  const hour = date.getHours();
  const min = date.getMinutes();

  const formattedDateWithTime = `${day} ${month} ${newDate}, ${year} ${hour}:${min}`;

  return formattedDateWithTime;
};
