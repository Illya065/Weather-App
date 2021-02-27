import { connect } from "react-redux";
import { setImg } from "../../../../_redux/weatherReducer";
import MainCard from "./MainCard";

const mapStateToProps = (state) => {
  return {
    cityName: state.weatherPage.currentWeather.name,
    humidity: state.weatherPage.currentWeather.main.humidity,
    pressure: state.weatherPage.currentWeather.main.pressure,
    wind: state.weatherPage.currentWeather.wind.speed,
    description: state.weatherPage.currentWeather.weather[0].main,
    currentTemp: state.weatherPage.currentWeather.main.temp,
    weatherState: state.weatherPage.weatherState,
    currentTime: state.weatherPage.currentTime,
    days: state.weatherPage.days,
    month: state.weatherPage.month,
    arr: state.weatherPage.arr,
  };
};

const MainCardContainer = connect(mapStateToProps, { setImg })(MainCard);

export default MainCardContainer;
