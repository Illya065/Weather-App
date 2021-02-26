import * as axios from "axios";

const API_key = "508abd8e606423c4a10bd147772a9bd0";

const apiInstance = axios.create({
  withCredentials: true,
  baseURL: "api.openweathermap.org/data/2.5/weather",
  headers: {
    "API-KEY": "508abd8e606423c4a10bd147772a9bd0",
  },
});

console.log("asdasdad dsvds");

export const weatherAPI = {
  getCurrentWeather(city) {
    return apiInstance.get(`?q=${city}&appid=${API_key}`);
  },
};
