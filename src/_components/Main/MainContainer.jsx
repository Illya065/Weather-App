import React from "react";
import { connect } from "react-redux";
import Main from "./Main";
import { currentWeatherThunk } from "../../_redux/weatherReducer";

const mapStateToProps = (state) => {
  return {
    currentWeather: state.weatherPage.currentWeather,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

const MainContainer = connect(mapStateToProps, { currentWeatherThunk })(Main);

export default MainContainer;
