import React from "react";
import { connect } from "react-redux";
import Main from "./Main";
import { setCity, currentWeatherThunk } from "../../_redux/weatherReducer";

const mapStateToProps = (state) => {
  return {
    currentTemp: state.weatherPage.currentWeather.main.temp,
    city: state.weatherPage.city,
    cityName: state.weatherPage.currentWeather.name,
    humidity: state.weatherPage.currentWeather.main.humidity,
    pressure: state.weatherPage.currentWeather.main.pressure,
    wind: state.weatherPage.currentWeather.wind.speed,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const MainContainer = connect(mapStateToProps, {
  setCity,
  currentWeatherThunk,
})(Main);

export default MainContainer;
