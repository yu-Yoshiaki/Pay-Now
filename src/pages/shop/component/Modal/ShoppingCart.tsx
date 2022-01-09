/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-handler-names */
import type { ReactChild, VFC } from "react";
import { useState } from "react";

type Props = {
  time: number;
  itemsList: { id: number; productid: string; image?: string }[] | undefined;
  onClick: (id: number) => void;
  children: ReactChild;
};

export const ShoppingCart: VFC<Props> = (props) => {
  const [isOpenDetail, setOpenDetail] = useState(false);
  const handleOpen = () => {
    setOpenDetail(!isOpenDetail);
  };

  return (
    <div className="flex fixed bottom-0 z-20 flex-col space-y-3 w-full bg-white border md:w-[350px]">
      {isOpenDetail && (
        <>
          <div className="flex justify-between bg-white border-b">
            <h1 className="p-5 text-lg">購入商品 詳細</h1>
            {props.children}
          </div>

          <div className="flex overflow-scroll flex-col items-center space-y-2 text-center scrollbar-hide">
            {props.itemsList?.map((itemList) => {
              return (
                <div key={itemList.id} className="relative p-4 bg-white rounded-md border shadow-xl">
                  <div className="flex justify-between mb-4">
                    <h3 className="mr-3 text-lg truncate">購入ID：{itemList.productid}</h3>
                    <p className="py-1 px-2 text-sm text-center bg-gray-300 rounded-3xl">Demo</p>
                  </div>

                  {/* <Image src={itemList.image ?? "/watch.jpeg"} alt={"腕時計"} width={280} height={300} /> */}
                  {/* <p className="p-2 text-lg">{itemList.productid}</p> */}
                  {/* {props.cancelButton({ value: "Cancel", id: itemList.id })} */}
                  <button
                    onClick={() => {
                      return props.onClick(itemList.id);
                    }}
                    className="text-lg text-blue-500"
                  >
                    Cancel
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}

      <div className="flex justify-around ">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </div>
        <p className="p-5 text-2xl text-center bg-white">
          決済完了まで <span className="text-red-400">{props.time}</span> 秒
        </p>
        <button className="text-blue-400" onClick={handleOpen}>
          詳細
        </button>
      </div>
    </div>
  );
};
