import React from "react";
import Card from "./Cards/Card";
import CardBg from "./Cards/CardBg";
import MainCard from "./MainCard/MainCard";

const WeatherList = (props) => {
  return (
    <div className="weather__days">
      <MainCard
        humidity={props.humidity}
        wind={props.wind}
        pressure={props.pressure}
        cityName={props.cityName}
        currentTemp={props.currentTemp}
      />

      <CardBg />

      <Card />

      <CardBg />

      <Card />

      <CardBg />

      <Card />
    </div>
  );
};

export default WeatherList;
