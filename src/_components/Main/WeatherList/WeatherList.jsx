import React from "react";
import Card from "./Cards/Card";
import MainCardContainer from "./MainCard/MainCardContainer";

const WeatherList = (props) => {
  debugger;
  let weatherDays = props.forecastDays.map((item) => (
    <Card
      bg={item.bg}
      num={item.num}
      list={props.forecastList}
      arr={props.arr}
    />
  ));
  return (
    <div className="weather__days">
      <MainCardContainer />
      {weatherDays}
    </div>
  );
};

export default WeatherList;
