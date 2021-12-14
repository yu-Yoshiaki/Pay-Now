/* eslint-disable no-console */
import { useCallback, useEffect, useState } from "react";

export const useTimer = (count = 3) => {
  const [isStartFlag, setStartFlag] = useState(false);
  const [time, setTime] = useState(count);
  const [isComplete, setComplete] = useState(false);

  const timerStart = useCallback(() => {
    setStartFlag(true);
  }, []);

  const reset = useCallback(() => {
    setTime(count);
    setComplete(false);
    setStartFlag(false);
  }, [count]);

  useEffect(() => {
    if (isComplete) return reset();

    if (!isStartFlag) return;
    if (time <= 0) {
      setComplete(true);
      return;
    }
    const id = setInterval(() => {
      return setTime(time - 1);
    }, 1000);
    return () => {
      return clearInterval(id);
    };
  }, [isComplete, isStartFlag, reset, time]);

  console.log("time: ", time);

  return { time, timerStart, isComplete, reset };
};
