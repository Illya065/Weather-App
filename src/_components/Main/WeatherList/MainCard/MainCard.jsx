import React from "react";
import "./MainCard.css";

const MainCard = (props) => {
  return (
    <div className="weather__item weather__main-item">
      <div className="main__item-date">
        <div className="main__item-day">Monday</div>
        <div className="main__item-year">6 Oct</div>
      </div>
      <div className="main__item-card">
        <div className="card__body">
          <div className="card__city">{props.cityName}</div>
          <div className="card__weather">
            <div className="card__temp">
              {`${Math.round(props.currentTemp)}°C`}
            </div>
            <div className="card__img"></div>
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
