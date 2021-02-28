import { connect } from "react-redux";
import WeatherList from "./WeatherList";
import { forecastThunk } from "../../../_redux/weatherReducer";

const mapStateToProps = (state) => {
  return {
    forecastList: state.weatherPage.forecast.list,
    forecastDays: state.weatherPage.forecastDays,
    city: state.weatherPage.city,
    arr: state.weatherPage.arr,
    currentTime: state.weatherPage.currentTime,
    days: state.weatherPage.days,
    month: state.weatherPage.month,
  };
};

const WeatherListContainer = connect(mapStateToProps, { forecastThunk })(
  WeatherList
);

export default WeatherListContainer;