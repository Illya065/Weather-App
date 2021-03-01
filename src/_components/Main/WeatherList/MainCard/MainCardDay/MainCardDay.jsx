import React from "react";

const MainCardDay = (props) => {
  return (
    <div className="main__item-date">
      <div className="main__item-day">{props.day}</div>
      <div className="main__item-year">{`${props.currentTime.getMonth()} ${
        props.monthcur
      }`}</div>
    </div>
  );
};

export default MainCardDay;
