/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */
import { loadStripe } from "@stripe/stripe-js";
import type { CustomNextPage } from "next";
import { useEffect, useState } from "react";
import { useGetStripeMaterials } from "src/hooks/useGetStripeMaterials";
import { Header } from "src/pages/lp/Layout/Header";

import { Cart } from "./Cart";
import { MainField } from "./MainField";
import { Materials } from "./Materials";

export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Index: CustomNextPage = () => {
  const [isCartView, onCartView] = useState(false);
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(300); //タイマーカウント数
  const [isTimerStart, setIsTimerStart] = useState(false); //タイマー起動
  const [itemList, setItemList] = useState<{ id: number; productid: string; image: string }[]>([]);
  const [itemListNumber, setItemListNumber] = useState(0);

  // const testItem: { id: string; name: string }[] = [
  //   { id: "prod_KXSBHxeY7TwFs4", name: `Tshirts` },
  //   { id: "prod_Kfzuvy8rA5cGHk", name: `watch` },
  //   { id: "prod_ueol6FLHgjakj0", name: `phone` },
  //   // { id: "", name: `melon` },
  //   // { id: "", name: `bannan` },
  //   // { id: "", name: `lemon` },
  //   // { id: "", name: `coke` },
  //   // { id: "", name: `beer` },
  //   // { id: "", name: `meet` },
  //   // { id: "", name: `car` },
  //   // { id: "", name: `fish` },
  //   // { id: "", name: `home` },
  //   // { id: "", name: `ticket` },
  // ];

  useEffect(() => {
    if (time <= 0) return;
    if (itemList.length <= 0) {
      setTime(300);
      return setIsTimerStart(false);
    }
    if (isTimerStart) {
      const id = setInterval(() => {
        return setTime(time - 1);
      }, 1000);
      return () => {
        return clearInterval(id);
      };
    }
  }, [isTimerStart, itemList.length, time]);

  const { data: materials, isError, isLoading } = useGetStripeMaterials();
  if (isError) return <div>error</div>;
  if (isLoading) return <div>Loding...</div>;
  if (materials === undefined) return <div>Data isNothing...</div>;
  const products = materials.products;

  const handleOpenCart = () => {
    return onCartView(!isCartView);
  };
  const handleCountup = (e: { id: string; image: string }) => {
    //この処理が呼ばれた初回だけタイマー起動
    if (!isTimerStart) setIsTimerStart(true);
    setItemList([...itemList, { id: itemListNumber, productid: e.id, image: e.image }]);
    setItemListNumber(itemListNumber + 1);
    setCount(count + 1);
  };
  const handleCancel = (e: number) => {
    const result = itemList.filter((item) => {
      return item.id !== e;
    });
    setItemList(result);
  };

  const cancelButton = (e: { value?: string; id: number }) => {
    return (
      <button
        onClick={() => {
          return handleCancel(e.id);
        }}
        className="text-lg text-blue-500"
      >
        {e.value ?? "Button"}
      </button>
    );
  };

  return (
    <div>
      <div className=" py-3 w-full text-center bg-yellow-400">ベータ版になります。実際に購入することはできません。</div>
      <Header>
        <button
          onClick={handleOpenCart}
          className="p-5 w-[100px] hover:text-white bg-gray-300 hover:bg-blue-500 rounded-lg"
        >
          Cart
        </button>
      </Header>
      <MainField />
      <div className="p-8 text-center md:h-[600px]">
        {products.map((product) => {
          // const [purchased, isPurchased] = useState(false);

          return (
            <Materials
              key={product.name}
              name={product.name}
              images={product.images}
              cancelButton={cancelButton}
              time={time}
            >
              <button
                onClick={() => {
                  return handleCountup({ id: product.id, image: product.images[0] });
                  // return handleCountup({ id: product.id, image: "/no_image.jpg" });
                }}
                className="p-3 active:p-2 w-full h-12 active:text-lg text-white bg-green-500 rounded-md"
              >
                Pay Now
              </button>
            </Materials>
          );
        })}
      </div>
      {isCartView && <Cart time={time} itemsList={itemList} cancelButton={cancelButton} closeButton={handleOpenCart} />}
    </div>
  );
};

export default Index;
