/* eslint-disable no-console */
//This hook is for BuyButton component.

/* 
  チェックアウト判定フック
*/
import { useRouter } from "next/dist/client/router";
import { useCallback, useState } from "react";

export const useCheckout = () => {
  const router = useRouter();
  // In Production, isUser hook change firebase auth.
  const [isUser] = useState(true);

  const [isPurchaseCompleteFlag, setIsPurchaseCompleteFlag] = useState(false);
  const [isOrderEdit, setIsOrderEdit] = useState(false);

  const handleClick = useCallback(() => {
    if (isUser) {
      setIsPurchaseCompleteFlag(true);
      setIsOrderEdit(true);
    } else router.push("/shop/login");
  }, [isUser, router, setIsOrderEdit, setIsPurchaseCompleteFlag]);

  const handleCancel = useCallback(() => {
    setIsOrderEdit(false);
    setIsPurchaseCompleteFlag(false);
  }, []);

  return {
    setIsOrderEdit,
    setIsPurchaseCompleteFlag,
    isUser,
    isOrderEdit,
    handleClick,
    isPurchaseCompleteFlag,
    handleCancel,
  };
};
