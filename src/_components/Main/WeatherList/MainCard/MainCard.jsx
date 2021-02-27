import React from "react";
import "./MainCard.css";
import clouds from "../../../../img/scattered.png";
import clear from "../../../../img/clear.png";
import snow from "../../../../img/snow.png";
import rain from "../../../../img/rain.png";
import mist from "../../../../img/mist.png";
import thunderstorm from "../../../../img/thunderstorm.png";
import shower from "../../../../img/shower.png";

const MainCard = (props) => {
  let day = props.days.filter((i) => {
    return props.days.indexOf(i) === props.currentTime.getDay();
  });

  let monthcur = props.month.filter((i) => {
    return props.month.indexOf(i) === props.currentTime.getMonth();
  });

  return (
    <div className="weather__item weather__main-item">
      <div className="main__item-date">
        <div className="main__item-day">{day}</div>
        <div className="main__item-year">{`${props.currentTime.getMonth()} ${monthcur}`}</div>
      </div>
      <div className="main__item-card">
        <div className="card__body">
          <div className="card__city">{props.cityName}</div>
          <div className="card__weather">
            <div className="card__temp">
              {`${Math.round(props.currentTemp)}°C`}
            </div>
            <div className="card__img">
              {props.description === "Clouds" ? (
                <img src={clouds} />
              ) : props.description === "Snow" ? (
                <img src={snow} />
              ) : props.description === "Clear" ? (
                <img src={clear} />
              ) : props.description === "Rain" ? (
                <img src={shower} />
              ) : props.arr.includes(props.description) ? (
                <img src={mist} />
              ) : props.description === "Thunderstorm" ? (
                <img src={thunderstorm} />
              ) : props.description === "Drizzle" ? (
                <img src={rain} />
              ) : (
                <div>none</div>
              )}
            </div>
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
