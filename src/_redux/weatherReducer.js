import { weatherAPI } from "../_api/api";

const ADD_CURRENT_TEMP = "ADD_CURRENT_TEMP";
const SET_CITY = "SET_CITY";
const SET_IMG = "SET_IMG";
const ADD_FORECAST = "ADD_FORECAST";

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
    },
    {
      bg: false,
      num: 13,
    },
    {
      bg: true,
      num: 19,
    },
    {
      bg: false,
      num: 26,
    },
    {
      bg: true,
      num: 32,
    },
    {
      bg: false,
      num: 39,
    },
  ],
};

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_TEMP:
      return {
        ...state,
        currentWeather: action.weather,
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
      debugger;
      return {
        ...state,
        forecast: action.forecast,
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

export const currentWeatherThunk = (city) => (dispatch) => {
  weatherAPI
    .getCurrentWeather(city)
    .then((data) => {
      dispatch(setCurrentWeather(data));
    })
    .catch((err) => {
      return alert("curenn");
    });
};

export const forecastThunk = (city) => (dispatch) => {
  weatherAPI
    .getForecast(city)
    .then((data) => {
      dispatch(setForecast(data));
    })
    .catch((err) => {
      return alert("forecast");
    });
};

export default weatherReducer;
