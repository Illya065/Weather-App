import axios from "axios";

export const weatherAPI = {
  getCurrentWeather(city) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=508abd8e606423c4a10bd147772a9bd0&units=metric`
    ).then((response) => response.json());
  },

  getForecast(city) {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=4411f04dca8eeeeb6f92301df909a1de&units=metric`
      )
      .then((response) => response.data);
  },
};
