import React from "react";
import WeatherImages from "../../../_common/WeatherImages/WeatherImages";

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
        <WeatherImages
          origin={props.list[props.num].weather[0].main}
          class="weather__item-img"
          arr={props.arr}
        />
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
