//削除よてい

import { useCheckout } from "src/hooks/useCheckout";
import { useTimer } from "src/hooks/useTimer";

export const PurchaseComplete = () => {
  const { time } = useTimer();
  const { handleCancel } = useCheckout();

  // eslint-disable-next-line no-console
  console.log("pur", time);

  return (
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
        <p className="text-sm text-white">
          <strong className="text-sm">{time}</strong>秒 決済完了まで商品の追加、編集、キャンセルが可能です。
        </p>
      </div>

      <button className="w-full text-lg text-blue-700" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};
