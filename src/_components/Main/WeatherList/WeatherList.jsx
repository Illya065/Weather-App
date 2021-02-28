import React from "react";
import Card from "./Cards/Card";
import MainCardContainer from "./MainCard/MainCardContainer";

const WeatherList = (props) => {
  let weatherDays = props.forecastDays.map((item) => (
    <Card
      id={item.id}
      bg={item.bg}
      num={item.num}
      list={props.forecastList}
      arr={props.arr}
      currentTime={props.currentTime}
      days={props.days}
      month={props.month}
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
