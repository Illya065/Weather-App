import React from "react";
import Loader from "../../_common/Loader/Loader";
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
      {/* {props.isFetching ? <Loader /> : null} */}
      <MainCardContainer />
      {weatherDays}
    </div>
  );
};

export default WeatherList;
