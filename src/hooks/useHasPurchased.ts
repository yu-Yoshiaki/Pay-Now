/* eslint-disable no-console */
import { useEffect, useState } from "react";

export const useHasPurchased = (time: number) => {
  const [hasPurchased, setHasPurchased] = useState(false);

  useEffect(() => {
    if (time <= 0)
      //timeが０になると出るwindow alertを閉じたあとに起動する。そのため0.3秒時差
      setTimeout(() => {
        setHasPurchased(false);
      }, 300);
  }, [time]);

  return { hasPurchased, setHasPurchased };
};
