import React from "react";
import clouds from "../../../../img/scattered.png";
import clear from "../../../../img/clear.png";
import snow from "../../../../img/snow.png";
import rain from "../../../../img/rain.png";
import mist from "../../../../img/mist.png";
import thunderstorm from "../../../../img/thunderstorm.png";
import shower from "../../../../img/shower.png";

const Card = (props) => {
  let first = props.currentTime.getDay() + props.id < 7 ? 0 : 7;
  let res = props.currentTime.getDay() + props.id - first;
  let day = props.days.filter((i) => {
    return props.days.indexOf(i) === res;
  });
  return (
    <div className={props.bg ? "weather__item bg" : "weather__item"}>
      <div className="weather__item-day">{day}</div>
      <div className="weather__item-body">
        <div className="weather__item-img">
          {props.list[props.num].weather[0].main === "Clouds" ? (
            <img src={clouds} />
          ) : props.list[props.num].weather[0].main === "Snow" ? (
            <img src={snow} />
          ) : props.list[props.num].weather[0].main === "Clear" ? (
            <img src={clear} />
          ) : props.list[props.num].weather[0].main === "Rain" ? (
            <img src={shower} />
          ) : props.arr.includes(props.description) ? (
            <img src={mist} />
          ) : props.list[props.num].weather[0].main === "Thunderstorm" ? (
            <img src={thunderstorm} />
          ) : props.list[props.num].weather[0].main === "Drizzle" ? (
            <img src={rain} />
          ) : (
            <div>none</div>
          )}
        </div>
        <div className="weather__item-temp">
          {Math.round(props.list[props.num].main.temp)}°C
        </div>
        <div className="weather__item-humid">
          {Math.round(props.list[props.num].main.humidity)} %
        </div>
      </div>
    </div>
  );
};

export default Card;
