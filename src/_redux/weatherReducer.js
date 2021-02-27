import { weatherAPI } from "../_api/api";

const ADD_CURRENT_TEMP = "ADD_CURRENT_TEMP";
const SET_CITY = "SET_CITY";

let initialState = {
  currentWeather: {
    main: {
      temp: "0",
      humidity: 0,
      pressure: 0,
    },
    wind: {
      speed: 0,
    },
    name: "Odessa",
  },
  city: "Odessa",
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_TEMP:
      return {
        ...state,
        currentWeather: action.weather,
      };

    case SET_CITY:
      debugger;
      return {
        ...state,
        city: action.city,
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

export const setCity = (city) => {
  return {
    type: SET_CITY,
    city,
  };
};

export const currentWeatherThunk = (city) => (dispatch) => {
  weatherAPI
    .getCurrentWeather(city)
    .then((data) => {
      dispatch(setCurrentWeather(data));
    })
    .catch((err) => {
      return alert(err);
    });
};

export default weatherReducer;
