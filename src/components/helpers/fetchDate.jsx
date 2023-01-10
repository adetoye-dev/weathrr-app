const fetchDate = (dateTime) => {
  const dateData = new Date(dateTime * 1000);

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return {
    time: {
      seconds: dateData.getSeconds(),
      minutes: dateData.getMinutes(),
      hours: dateData.getHours(),
    },
    weekday: weekday[dateData.getDay()],
    date: dateData.getDate(),
    month: month[dateData.getMonth()],
    year: dateData.getFullYear(),
  };
};

export default fetchDate;
