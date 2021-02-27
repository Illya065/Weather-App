import React from "react";
import "./Main.css";
import AddCityFormRedux from "./SearchForm/SearchForm";
import WeatherList from "./WeatherList/WeatherList";
import WeatherListContainer from "./WeatherList/WeatherListContainer";

const Main = (props) => {
  const addCity = (value) => {
    props.setCity(value.city);
  };
  props.currentWeatherThunk(props.city);

  return (
    <main className="main">
      <div className="bg__city"> </div>
      <div className="bg__darkblue"></div>
      <div className="container">
        <div className="main__content">
          <section className="search">
            <AddCityFormRedux onSubmit={addCity} />
          </section>

          <section className="weather">
            <WeatherListContainer />
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
