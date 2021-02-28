import { weatherAPI } from "../_api/api";

const ADD_CURRENT_TEMP = "ADD_CURRENT_TEMP";
const SET_CITY = "SET_CITY";
const SET_IMG = "SET_IMG";
const ADD_FORECAST = "ADD_FORECAST";
const SET_IS_FETCHING = "SET_IS_FETCHING";

let initialState = {
  currentWeather: {
    main: {
      temp: null,
      humidity: null,
      pressure: null,
    },
    wind: {
      speed: null,
    },
    name: null,
    weather: [
      {
        description: null,
      },
    ],
  },
  forecast: {
    list: [
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
      {
        main: {
          temp: null,
        },
        weather: [{ main: null }],
      },
    ],
  },
  city: "Kyiv",
  weatherState: null,
  currentTime: new Date(),
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  month: [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "June",
    "July",
    "Aug.",
    "Sept.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  arr: [
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
  ],
  forecastDays: [
    {
      bg: true,
      num: 6,
      id: 1,
    },
    {
      bg: false,
      num: 13,
      id: 2,
    },
    {
      bg: true,
      num: 19,
      id: 3,
    },
    {
      bg: false,
      num: 26,
      id: 4,
    },
    {
      bg: true,
      num: 32,
      id: 5,
    },
    {
      bg: false,
      num: 39,
      id: 6,
    },
  ],
  isFetching: false,
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_TEMP:
      return {
        ...state,
        currentWeather:
          action.weather.cod == 404 ? state.currentWeather : action.weather,
      };

    case SET_CITY:
      return {
        ...state,
        city: action.city,
      };

    case SET_IMG:
      return {
        ...state,
        weatherState: action.code,
      };

    case ADD_FORECAST:
      return {
        ...state,
        forecast: action.forecast.cod == 404 ? state.forecast : action.forecast,
      };

    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.condition,
      };

    default:
      return state;
  }
};

export const setForecast = (forecast) => {
  return {
    type: ADD_FORECAST,
    forecast,
  };
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

export const setImg = (code) => {
  return {
    type: SET_IMG,
    code,
  };
};

export const setIsFetching = (condition) => {
  return {
    type: SET_IS_FETCHING,
    condition,
  };
};

export const currentWeatherThunk = (city) => (dispatch) => {
  if (!city) {
    return "error";
  }
  dispatch(setIsFetching(true));
  weatherAPI
    .getCurrentWeather(city)
    .then((data) => {
      if (!data) {
        return "error";
      }
      dispatch(setIsFetching(false));
      dispatch(setCurrentWeather(data));
    })
    .catch((err) => {
      alert(`cdasdasdent${err}`);
    });
};

export const forecastThunk = (city) => (dispatch) => {
  if (!city) {
    return "error";
  }
  weatherAPI
    .getForecast(city)
    .then((data) => {
      debugger;
      if (!data) {
        return "error";
      }
      dispatch(setForecast(data));
    })
    .catch((err) => {
      return alert(`fosssssst${err}`);
    });
};

export default weatherReducer;
