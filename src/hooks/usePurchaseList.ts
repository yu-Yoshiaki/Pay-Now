import { useCallback, useState } from "react";

import { useSWRState } from "./useSWRState";

type ItemList = {
  key: number;
  productid: string;
  count: number;
  price: number;
}[];

export const usePurchaseList = () => {
  const [isItemList, setItemList] = useSWRState<ItemList>("/purchaselist", []);
  const [key, setKey] = useState(0);
  // const [index, setIndex] = useState(0);

  const addItem = useCallback(
    (productid: string, price: number) => {
      const isResult = isItemList.some((item) => {
        return item.productid === productid;
      });

      if (isResult) {
        const result = isItemList.findIndex((item) => {
          return item.productid === productid;
        });

        isItemList[result].count += 1;
        isItemList[result].price = isItemList[result].price * isItemList[result].count;
        return;
      } else {
        setItemList([...isItemList, { key, productid, count: 1, price }]);
        setKey(key + 1);
        return;
      }
    },
    [isItemList, key, setItemList]
  );

  const removeItem = useCallback(
    (key: number) => {
      const result = isItemList.filter((item) => {
        return item.key !== key;
      });
      setItemList(result);
    },
    [isItemList, setItemList]
  );

  return { isItemList, removeItem, addItem };
};
