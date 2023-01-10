const fetchIcon = (icon) => {
  let iconDescription = "";

  if (icon === "01d" || icon === "01n") {
    if (icon === "01d") {
      iconDescription = "clear sky";
    } else {
      iconDescription = "clear sky night";
    }
  } else if (icon === "02d" || icon === "02n") {
    if (icon === "02d") {
      iconDescription = "few clouds";
    } else {
      iconDescription = "few clouds night";
    }
  } else if (icon === "03d" || icon === "03n") {
    iconDescription = "scattered clouds";
  } else if (icon === "04d" || icon === "04n") {
    iconDescription = "broken clouds";
  } else if (icon === "09d" || icon === "09n") {
    iconDescription = "shower rain";
  } else if (icon === "10d" || icon === "10n") {
    iconDescription = "rain";
  } else if (icon === "11d" || icon === "11n") {
    iconDescription = "thunderstorm";
  } else if (icon === "13d" || icon === "13n") {
    iconDescription = "snow";
  } else if (icon === "50d" || icon === "50n") {
    iconDescription = "mist";
  }

  return iconDescription;
};

export default fetchIcon;
