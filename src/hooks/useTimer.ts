/* eslint-disable no-console */
import { useCallback, useEffect } from "react";
import { useSWRState } from "src/hooks/useSWRState";
/* 
タイマー機能
・起動
・ストップ
・リセット
*/
export const useTimer = (count = 60) => {
  const [time, setTime] = useSWRState("/timer", count);

  const [isStart, setStart] = useSWRState("/starttimer", false);

  const timerStart = useCallback(() => {
    setStart(true);
  }, [setStart]);

  const timerStop = useCallback(() => {
    setStart(false);
  }, [setStart]);

  const resetTimer = useCallback(() => {
    setStart(false);
    setTime(count);
  }, [count, setStart, setTime]);

  useEffect(() => {
    if (isStart) {
      // 0になったらリセット
      if (time < -0.1) {
        resetTimer();
        return;
      }

      const id = setInterval(() => {
        return setTime(time - 0.1);
      }, 100);
      return () => {
        return clearInterval(id);
      };
    }
  }, [isStart, resetTimer, setTime, time]);

  return { time, timerStart, timerStop, resetTimer };
};
