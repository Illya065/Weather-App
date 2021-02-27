import React from "react";

const Card = (props) => {
  return (
    <div className="weather__item">
      <div className="weather__item-day">Tuesday</div>
      <div className="weather__item-body">
        <div className="weather__item-img"></div>
        <div className="weather__item-temp">23°C</div>
      </div>
    </div>
  );
};

export default Card;
