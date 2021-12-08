/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react/jsx-handler-names */
import Image from "next/image";
import type { ReactChild, VFC } from "react";

type Props = {
  time: number;
  itemsList: { id: number; productid: string; image?: string }[];
  onClick: (id: number) => void;
  children: ReactChild;
};

export const Cart: VFC<Props> = (props) => {
  return (
    <div className="flex fixed top-12 right-0 bottom-0 z-20 flex-col space-y-3 w-[250px] bg-white border md:w-[350px]">
      <div className="flex justify-between p-1 bg-white border-b">
        <h1 className="p-4 w-[100px] text-2xl font-bold">Cart</h1>
        {props.children}
      </div>

      <div className="flex overflow-scroll flex-col items-center pb-[90px] space-y-4 text-center scrollbar-hide">
        {props.itemsList.map((itemList) => {
          return (
            <div key={itemList.id} className="relative p-4 w-[240px] bg-white rounded-md border shadow-xl">
              <div className="flex justify-between mb-4">
                <h3 className="mr-3 text-lg truncate">購入ID：{itemList.productid}</h3>
                <p className="py-1 px-2 text-sm text-center bg-gray-300 rounded-3xl">Demo</p>
              </div>

              <Image src={itemList.image ?? "/watch.jpeg"} alt={"腕時計"} width={280} height={300} />
              <p className="p-2 text-lg">{itemList.productid}</p>
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
      <p className="absolute bottom-0 p-6 w-full text-2xl text-center text-blue-500 bg-white">
        決済完了まで {props.time} 秒
      </p>
    </div>
  );
};
