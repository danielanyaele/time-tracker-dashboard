import React from "react";
import Icon from "../assets/sprite.svg";

const Svg = ({ name}) => {
  return (
    <svg>
      <use href={`${Icon}#icon-${name}`}></use>
    </svg>
  );
};

export default Svg;
const token = "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";