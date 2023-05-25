import React, { useState } from "react";
import Image from "../assets/image-jeremy.png";
import "../styles/user.css";

const User = ({ handleSwitch }) => {
  const [activeBtn, setActiveBtn] = useState("weekly"); 
  
  const handleActiveBtn = (btn) => {
    setActiveBtn(btn);
  }

  return (
    <div className="user">
      <div className="user__details">
        <img src={Image} alt="user pic" className="user__photo" />
        <div className="user__info">
          <div className="user__report">Report for</div>
          <div className="user__name">Jeremy Robson</div>
        </div>
      </div>
      <div className="user__nav">
        <button
          className={`user__nav-btn ${activeBtn === "daily" && `btn--active`}`}
          data-btn="daily"
          onClick={() => {
            handleSwitch("switch", "daily");
            handleActiveBtn("daily");
          }}
        >
          Daily
        </button>
        <button
          className={`user__nav-btn ${activeBtn === "weekly" && `btn--active`}`}
          data-btn="weekly"
          onClick={() => {
            handleSwitch("switch", "weekly");
            handleActiveBtn("weekly");
          }}
        >
          Weekly
        </button>
        <button
          className={`user__nav-btn ${
            activeBtn === "monthly" && `btn--active`
          }`}
          data-btn="monthly"
          onClick={() => {
            handleSwitch("switch", "monthly");
            handleActiveBtn("monthly");
          }}
        >
          Monthly
        </button>
      </div>
    </div>
  );
};

export default User;
