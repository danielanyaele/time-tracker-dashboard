import React from "react";
import "../styles/card.css";
import Svg from "./svgIcon";

const Card = ({ title, previousTime, currentTime }) => {

  const configureTime = (time) => {
    const newTime = `${
      time > 1 ? `${time}hrs` : `${time}hr`
    }`;

    return newTime;
  }

  const svgName = `${title === "Self Care" ? "Self-Care" : title}`;
  return (
    <div className="card">
      <div
        className="card__icon"
        style={{ backgroundColor: `var(--${svgName.toLowerCase()})` }}
      >
        <Svg name={svgName.toLowerCase()} />
      </div>

      <div className="card__details">
        <div className="card__type">
          <div className="card__heading">{title}</div>
          <div className="card__icon-box">
            <Svg name="ellipsis" />
          </div>
        </div>

        <div className="card__time">
          <div className="card__time--current">{configureTime(currentTime)}</div>
          <div className="card__time--previous">
            Last Week - {configureTime(previousTime)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
