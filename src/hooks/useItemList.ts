import { useCallback, useState } from "react";

export const useItemList = () => {
  const [isItemList, setItemList] = useState<{ id: number; productid: string; image: string }[]>([]);
  const [key, setKey] = useState(0);

  const addItem = useCallback(
    (id: string, image: string) => {
      setItemList([...isItemList, { id: key, productid: id, image: image }]);
      setKey(key + 1);
      return;
    },
    [isItemList, key]
  );

  const removeItem = useCallback(
    (id: number) => {
      const result = isItemList.filter((item) => {
        return item.id !== id;
      });
      setItemList(result);
    },
    [isItemList]
  );

  return { isItemList, removeItem, addItem };
};
