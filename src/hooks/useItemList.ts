import { useCallback, useState } from "react";

import { useSWRState } from "./useSWRState";

type ItemList = {
  id: number;
  productid: string;
  image: string;
}[];

export const useItemList = () => {
  const [isItemList, setItemList] = useSWRState<ItemList>("items", []);
  const [key, setKey] = useState(0);

  const addItem = useCallback(
    (id: string, image: string) => {
      setItemList([...isItemList, { id: key, productid: id, image: image }]);
      setKey(key + 1);
      return;
    },
    [isItemList, key, setItemList]
  );

  const removeItem = useCallback(
    (id: number) => {
      const result = isItemList.filter((item) => {
        return item.id !== id;
      });
      setItemList(result);
    },
    [isItemList, setItemList]
  );

  return { isItemList, removeItem, addItem };
};
