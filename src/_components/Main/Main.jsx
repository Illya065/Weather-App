import React from "react";
import "./Main.css";

const Main = (props) => {
  return (
    <main className="main">
      <div className="bg__city"> </div>
      <div className="bg__darkblue"></div>
      <div className="container">
        <div className="main__content">
          <section className="search">
            <form className="search__form">
              <input type="text" className="search__input" />
              <button className="search__button">Find</button>
            </form>
          </section>
          <section className="weather">
            <div className="weather__days">
              <div className="weather__item weather__main-item">
                <div className="main__item-date">
                  <div className="main__item-day">Monday</div>
                  <div className="main__item-year">6 Oct</div>
                </div>
                <div className="main__item-card">
                  <div className="card__body">
                    <div className="card__city">New-York</div>
                    <div className="card__weather">
                      <div className="card__temp">23°C</div>
                      <div className="card__img"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="weather__item bg">
                <div className="weather__item-day">Tuesday</div>
                <div className="weather__item-body">
                  <div className="weather__item-img"></div>
                  <div className="weather__item-temp">23°C</div>
                </div>
              </div>

              <div className="weather__item">
                <div className="weather__item-day">Tuesday</div>
                <div className="weather__item-body">
                  <div className="weather__item-img"></div>
                  <div className="weather__item-temp">23°C</div>
                </div>
              </div>

              <div className="weather__item bg">
                <div className="weather__item-day">Tuesday</div>
                <div className="weather__item-body">
                  <div className="weather__item-img"></div>
                  <div className="weather__item-temp">23°C</div>
                </div>
              </div>

              <div className="weather__item">
                <div className="weather__item-day">Tuesday</div>
                <div className="weather__item-body">
                  <div className="weather__item-img"></div>
                  <div className="weather__item-temp">23°C</div>
                </div>
              </div>

              <div className="weather__item bg">
                <div className="weather__item-day">Tuesday</div>
                <div className="weather__item-body">
                  <div className="weather__item-img"></div>
                  <div className="weather__item-temp">23°C</div>
                </div>
              </div>

              <div className="weather__item last">
                <div className="weather__item-day">Tuesday</div>
                <div className="weather__item-body">
                  <div className="weather__item-img"></div>
                  <div className="weather__item-temp">23°C</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Main;
