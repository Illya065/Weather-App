import { connect } from "react-redux";
import WeatherList from "./WeatherList";

const mapStateToProps = (state) => {
  return {
    forecastList: state.weatherPage.forecast.list,
    forecastDays: state.weatherPage.forecastDays,
    city: state.weatherPage.city,
    arr: state.weatherPage.arr,
    currentTime: state.weatherPage.currentTime,
    days: state.weatherPage.days,
    month: state.weatherPage.month,
    isFetching: state.weatherPage.isFetching,
  };
};

const WeatherListContainer = connect(mapStateToProps, {})(WeatherList);

export default WeatherListContainer;
