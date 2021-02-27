export const weatherAPI = {
  getCurrentWeather(city) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=508abd8e606423c4a10bd147772a9bd0&units=metric`
    ).then((response) => response.json());
  },
};
