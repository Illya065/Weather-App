import React from "react";
import clouds from "../../../img/scattered.png";
import clear from "../../../img/clear.png";
import snow from "../../../img/snow.png";
import rain from "../../../img/rain.png";
import mist from "../../../img/mist.png";
import thunderstorm from "../../../img/thunderstorm.png";
import shower from "../../../img/shower.png";

const WeatherImages = (props) => {
  return (
    <div className={props.class}>
      {props.origin === "Clouds" ? (
        <img src={clouds} alt="none" />
      ) : props.origin === "Snow" ? (
        <img src={snow} alt="none" />
      ) : props.origin === "Clear" ? (
        <img src={clear} alt="none" />
      ) : props.origin === "Rain" ? (
        <img src={shower} alt="none" />
      ) : props.arr.includes(props.origin) ? (
        <img src={mist} alt="none" />
      ) : props.origin === "Thunderstorm" ? (
        <img src={thunderstorm} alt="none" />
      ) : props.origin === "Drizzle" ? (
        <img src={rain} alt="none" />
      ) : (
        <div>none</div>
      )}
    </div>
  );
};

export default WeatherImages;
