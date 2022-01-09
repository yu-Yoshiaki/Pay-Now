import { useCallback, useState } from "react";
import { usePurchaseList } from "src/hooks/usePurchaseList";
import { useTimer } from "src/hooks/useTimer";

export const Cart = () => {
  const { time } = useTimer();
  const { isItemList } = usePurchaseList();
  const [isDetailOpen, setDetailOpen] = useState(false);

  const handleClick = useCallback(() => {
    setDetailOpen(!isDetailOpen);
  }, [isDetailOpen]);

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white ">
      {isDetailOpen && (
        <div className="border-t-2">
          <div className=" mx-auto w-[90%] ">
            <div className="flex justify-between py-2 mx-auto border-b-2">
              <h3>カート内の商品</h3>
              <button>すべて削除</button>
            </div>
            {isItemList.map((item) => {
              return (
                <div key={item.key} className="flex justify-between py-2">
                  <div>{item.productid}</div>
                  <div>{item.price} JPN</div>
                  <div>{item.count}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      <button className="flex justify-between items-center px-2 w-full border-2 shadow-lg" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 0 24 24" width="28px" fill="#000000">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>

        <p className="p-5 text-2xl text-center bg-white">
          決済完了まで <span className="text-red-400">{Math.trunc(time + 0.3)}</span> 秒
        </p>
      </button>
    </div>
  );
};
