import React, { useEffect, useState } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let timer = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time">
      {date.toLocaleDateString()} {date.toLocaleTimeString()}
    </div>
  );
};

export default Time;
