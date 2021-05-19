import React, { useEffect, useState } from "react";
import "./styles/_time.scss";
import { getWeekday } from "./utils";
import { useDispatch, useSelector } from "react-redux";
import { getDate, setDate } from "./store";

const Time = () => {
  const dispatch = useDispatch();
  const currentDate = useSelector(getDate);
  // const [date, setThisDate] = useState(new Date());

  console.log(`the current time -->`, currentDate.toLocaleString());

  useEffect(() => {
    let timer = setInterval(() => {
      const date = new Date();
      dispatch(setDate({ date }));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time">
      <div className="time_date">
        {/*<div className="time_date_day">{getWeekday(currentDate.getDay())}</div>*/}
        {/*<div className="time_date_number">{currentDate.getDate()}</div>*/}
      </div>
      {/*<div className="time_localTime">{currentDate.toLocaleTimeString()}</div>*/}
    </div>
  );
};

export default Time;
