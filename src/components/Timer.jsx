import React, { useEffect, useState } from "react";
export default function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer == 0) {
        setStop(true);
      }
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  },[setStop, timer]);

  useEffect(()=>{
    setTimer((60))
},[questionNumber])

  return timer;
}
