const apiKey = "e0ea1eb0fd1e347ba3dd4bf0000d1568";
const getWeather = async (city) => {
  return await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};

export default getWeather;
