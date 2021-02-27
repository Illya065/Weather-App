import React from "react";
import Card from "./Cards/Card";
import CardBg from "./Cards/CardBg";
import MainCardContainer from "./MainCard/MainCardContainer";

const WeatherList = (props) => {
  return (
    <div className="weather__days">
      <MainCardContainer />

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
