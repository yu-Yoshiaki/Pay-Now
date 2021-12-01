/* eslint-disable react/jsx-handler-names */
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import type { ReactChild } from "react";
import { useEffect, useState } from "react";

// import useSWR from "swr";
// import { fetcher } from "src/pages/shop/index.page";
// import { PurchasedWindow } from "./PurchasedWindow";

type Props = {
  name: string;
  images: string[];
  cancelButton: (e: { value: string; id: number }) => JSX.Element;
  children: ReactChild;
  time: number;
};

export const Materials = (props: Props) => {
  const router = useRouter();
  const [isPurchase, onPurchase] = useState(false); //購入可能かどうか（ログイン）
  // const [isPurchased, onPurchased] = useState(false);

  //ログイン済みかどうか？
  useEffect(() => {
    if (window) {
      const query = new URLSearchParams(window.location.search);
      if (query.get("email")) onPurchase(true);
    }
  }, []);

  return (
    <div className="inline-block relative p-4 mx-5 w-[318px] bg-white rounded-md shadow-xl">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg truncate">{props.name}</h3>
        <p className="py-1 px-2 text-sm text-center bg-gray-300 rounded-3xl">Demo</p>
      </div>

      <Image src={props.images[0]} alt={"腕時計"} width={280} height={300} />
      <p className="p-2 text-lg">1-click checkout の購入体験</p>

      {isPurchase ? (
        props.children
      ) : (
        <button
          onClick={() => {
            return router.push("/shop/login");
          }}
          className="p-3 w-full h-12 text-white bg-blue-500 rounded-md"
        >
          LOGIN
        </button>
      )}

      {/* {isPurchased && (
        <div className="absolute -right-3 bottom-36">
          <PurchasedWindow time={props.time} />
        </div>
      )} */}
    </div>
  );
};

// const handleClick = () => {
//   setCheckoutList(checkoutlist + 1);
//   if (!timerStart) setStart(true);
//   // window.alert("ご購入ありがとうございます。");
//   return;
// };
