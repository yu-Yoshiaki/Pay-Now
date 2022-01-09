/* eslint-disable no-console */
import { useCallback, useEffect } from "react";
import { useCheckout } from "src/hooks/useCheckout";
import { usePurchaseList } from "src/hooks/usePurchaseList";
import { useTimer } from "src/hooks/useTimer";

type Props = {
  productid: string;
  price: number;
};
export const Checkout = (props: Props) => {
  const { time, timerStart, timerStop } = useTimer();
  const {
    setIsOrderEdit,
    setIsPurchaseCompleteFlag,
    isPurchaseCompleteFlag,
    isUser,
    isOrderEdit,
    handleClick,
    handleCancel,
  } = useCheckout();
  const isBackgroundColor = isUser ? (isOrderEdit ? "bg-black" : "bg-green-500") : "bg-blue-500";
  const isButtonText = isUser ? (isOrderEdit ? "Order Edit!" : "Buy Now") : "LOGIN";

  const { addItem } = usePurchaseList();

  useEffect(() => {
    if (time < 0) {
      setIsPurchaseCompleteFlag(false);
      setIsOrderEdit(false);
    }
  }, [setIsOrderEdit, setIsPurchaseCompleteFlag, time]);

  const handleCheckout = useCallback(() => {
    if (isUser) {
      if (isOrderEdit) {
        console.log("画面遷移");
        return;
      }
      timerStart();
      handleClick();
      addItem(props.productid, props.price);
      return;
    }
  }, [addItem, handleClick, isOrderEdit, isUser, props.price, props.productid, timerStart]);

  const handleCancelCheckout = useCallback(() => {
    timerStop();
    handleCancel();
  }, [handleCancel, timerStop]);

  return (
    <div>
      <div className="space-x-2">
        <button onClick={handleCheckout} className={`p-3 w-full h-12 text-white rounded-md ${isBackgroundColor}`}>
          {isButtonText}
        </button>
      </div>

      {isPurchaseCompleteFlag && (
        <div className="inline-block overflow-hidden absolute top-[35%] -right-5 z-10 p-6 w-full max-w-md text-left align-middle bg-green-500 rounded-2xl shadow-xl transition-all transform">
          <h3 className="flex gap-x-2 text-lg font-medium leading-6 text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>{" "}
            Payment successful
          </h3>

          <div className="mt-2">
            <p className="text-sm text-white">商品の追加、編集、キャンセルが可能です。</p>
          </div>

          <button className="w-full text-lg text-blue-700" onClick={handleCancelCheckout}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};
