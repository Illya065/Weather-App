import { connect } from "react-redux";
import WeatherList from "./WeatherList";

const mapStateToProps = (state) => {
  return {};
};

const WeatherListContainer = connect(mapStateToProps, {})(WeatherList);

export default WeatherListContainer;
