import { weatherAPI } from "../_api/api";

const ADD_CURRENT_TEMP = "ADD_CURRENT_TEMP";

let initialState = {
  currentWeather: 10,
};

const weatherReducer = (state = initialState, action) => {
  let stateCopy = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ADD_CURRENT_TEMP:
      debugger;
      return {
        ...state,
        currentWeather: action.weather.main.temp,
      };

    default:
      return state;
  }
};

export const setCurrentWeather = (weather) => {
  return {
    type: ADD_CURRENT_TEMP,
    weather,
  };
};

export const currentWeatherThunk = (city) => (dispatch) => {
  debugger;
  fetch(
    `api.openweathermap.org/data/2.5/weather?q=${city}&appid=508abd8e606423c4a10bd147772a9bd0`
  )
    .then((response) => response.json())
    .then((data) => {
      dispatch(setCurrentWeather(data));
    })
    .catch((err) => alert("asda"));
};

export default weatherReducer;
