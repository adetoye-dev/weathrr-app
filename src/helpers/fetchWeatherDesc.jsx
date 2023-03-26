const fetchWeatherDesc = (icon) => {
  let weatherDescription = "";

  if (icon === "01d" || icon === "01n") {
    if (icon === "01d") {
      weatherDescription = "clear sky";
    } else {
      weatherDescription = "clear sky night";
    }
  } else if (icon === "02d" || icon === "02n") {
    if (icon === "02d") {
      weatherDescription = "few clouds";
    } else {
      weatherDescription = "few clouds night";
    }
  } else if (icon === "03d" || icon === "03n") {
    weatherDescription = "scattered clouds";
  } else if (icon === "04d" || icon === "04n") {
    weatherDescription = "broken clouds";
  } else if (icon === "09d" || icon === "09n") {
    weatherDescription = "shower rain";
  } else if (icon === "10d" || icon === "10n") {
    weatherDescription = "rain";
  } else if (icon === "11d" || icon === "11n") {
    weatherDescription = "thunderstorm";
  } else if (icon === "13d" || icon === "13n") {
    weatherDescription = "snow";
  } else if (icon === "50d" || icon === "50n") {
    weatherDescription = "mist";
  }

  return weatherDescription;
};

export default fetchWeatherDesc;
