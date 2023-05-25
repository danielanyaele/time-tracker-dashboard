import React, { useReducer } from "react";
import { switchLog, timeTrackingReducer } from "../reducers/reducers";
import appState from "../data";
import User from "./user";
import Card from "./card";
import "../styles/app.css";
import "../styles/responsive.css";

const App = () => {
  const [state, dispatch] = useReducer(
    timeTrackingReducer,
    switchLog("weekly", appState)
  );

  const handleSwitch = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <>
      <div className="wrapper">
        <User handleSwitch={handleSwitch} />
        <div className="activity">
          {state.map((item, index) => {
            return <Card {...item} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default App;
