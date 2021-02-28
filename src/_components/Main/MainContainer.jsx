import React from "react";
import { connect } from "react-redux";
import Main from "./Main";
import {
  setCity,
  currentWeatherThunk,
  forecastThunk,
  setIsFetching,
} from "../../_redux/weatherReducer";

const mapStateToProps = (state) => {
  return {
    city: state.weatherPage.city,
  };
};

const MainContainer = connect(mapStateToProps, {
  setCity,
  currentWeatherThunk,
  forecastThunk,
})(Main);

export default MainContainer;
