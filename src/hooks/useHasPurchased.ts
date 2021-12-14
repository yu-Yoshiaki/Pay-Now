/* eslint-disable no-console */
import { useEffect, useState } from "react";

// import { useItemList } from "./useItemList";

export const useHasPurchased = (time: number) => {
  const [hasPurchased, setHasPurchased] = useState(false);
  // const { isItemList } = useItemList();

  useEffect(() => {
    if (time <= 0)
      //timeが０になると出るwindow alertを閉じたあとに起動する。そのため0.3秒時差
      setTimeout(() => {
        setHasPurchased(false);
      }, 300);
  }, [time]);

  return { hasPurchased, setHasPurchased };
};
