import React from "react";
import WeatherImages from "../../../_common/WeatherImages/WeatherImages";
import "./MainCard.css";
import MainCardDay from "./MainCardDay/MainCardDay";

const MainCard = (props) => {
  let day = props.days.filter((i) => {
    return props.days.indexOf(i) === props.currentTime.getDay();
  });

  let monthcur = props.month.filter((i) => {
    return props.month.indexOf(i) === props.currentTime.getMonth();
  });

  return (
    <div className="weather__item weather__main-item">
      <MainCardDay
        day={day}
        monthcur={monthcur}
        currentTime={props.currentTime}
      />
      <div className="main__item-card">
        <div className="card__body">
          <div className="card__city">{props.cityName}</div>
          <div className="card__weather">
            <div className="card__temp">
              {`${Math.round(props.currentTemp)}°C`}
            </div>
            <WeatherImages
              origin={props.description}
              class="card__img"
              arr={props.arr}
            />
          </div>
          <div className="details">
            <div className="details__humidity det">
              <div className="humidity__img"></div>
              <div className="val">{`${props.humidity} %`}</div>
            </div>
            <div className="details__wind det">
              <div className="wind__img"></div>
              <div className="val">{`${props.wind} km/h`}</div>
            </div>
            <div className="details__preassure det">
              <div className="preassure__img"></div>
              <div className="val">{`${props.pressure} hPa`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
