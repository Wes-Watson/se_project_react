export const callWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const handleWeatherData = (res) => {
  const data = {};
  data.city = res.name;
  data.temp = {
    F: res.main.temp,
    C: Math.round(((res.main.temp - 32) * 5) / 9),
  };
  data.type = getWeatherType(res.main.temp);
  console.log(data);
  return data;
};

const getWeatherType = (temp) => {
  if (temp.F >= 86 || temp.C >= 30) {
    return "hot";
  } else if (temp.F >= 66 || temp.C >= 19) {
    return "warm";
  } else {
    return "cold";
  }
};

//weather.temperature.F = data.main.temp;
//weather.temperature.C = Math.round((data.main.temp - 32) * 5/9);
