import { useEffect, useState } from "react";

export const useCanPurchase = () => {
  const [isAvail, setAvail] = useState(false); //購入可能かどうか（ログイン）

  //ログイン済みかどうか？
  useEffect(() => {
    if (window) {
      const query = new URLSearchParams(window.location.search);
      if (query.get("email")) setAvail(true);
    }
  }, []);

  return { isAvail };
};
