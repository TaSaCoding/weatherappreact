import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.description}</li>
          </ul>
          <br />
          <ul>
            <li>Humidity:{props.data.humidity}%</li>
            <li>Wind:{Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <div className="d-flex justify-content-center mt-5">
            <WeatherIcon code={props.data.icon} size={72} />
            <div>
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
