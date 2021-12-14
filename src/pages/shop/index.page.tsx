/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */
import { loadStripe } from "@stripe/stripe-js";
import type { CustomNextPage } from "next";
import { useCallback } from "react";
import { useEffect } from "react";
import { useItemList } from "src/hooks/useItemList";
import { useSWRState } from "src/hooks/useSWRState";
import { useTimer } from "src/hooks/useTimer";
import { ShopLayout } from "src/pages/shop/layout/ShopLayout";

import { Cart } from "./component/Cart";
import { OpenCartButton } from "./component/OpenCartButton";
import { Products } from "./component/Products";
import { MainField } from "./layout/MainField";

export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// const testItem: { id: string; name: string; images: string[] }[] = [
//   { id: "prod_KXSBHxeY7TwFs4", name: `Tshirts`, images: ["/Tshirts.png"] },
//   { id: "prod_Kfzuvy8rA5cGHk", name: `watch`, images: ["/watch.jpeg"] },
//   { id: "prod_ueol6FLHgjakj0", name: `phone`, images: ["/iphone13.jpeg"] },
// ];

const Index: CustomNextPage = () => {
  const [isCartView] = useSWRState("isCartView", false);
  const { time, timerStart, isComplete, reset } = useTimer();
  const { isItemList, addItem, removeItem } = useItemList();

  useEffect(() => {
    if (isItemList.length <= 0) reset();
    if (isComplete) window.alert("Complete!! Thank you for your purchase! (Beta)");
    return;
  }, [isComplete, isItemList, reset]);

  const handleRemove = useCallback(
    (id: number) => {
      removeItem(id);
    },
    [removeItem]
  );

  const handleAddinCart = useCallback(
    (id: string, image: string) => {
      timerStart();
      addItem(id, image);
    },
    [addItem, timerStart]
  );

  return (
    <div>
      <MainField />

      {/* {testItem.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.id}</h2>
            <button
              onClick={() => {
                return handleAddinCart(item.id, item.images[0]);
              }}
            >
              Addd
            </button>
          </div>
        );
      })} */}

      <div className="flex flex-col justify-center p-8 space-y-4 text-center md:block md:h-{600px}">
        <Products time={time} handleAddinCart={handleAddinCart} />
      </div>

      {isCartView && (
        <Cart time={time} itemsList={isItemList} onClick={handleRemove}>
          <OpenCartButton text={"閉じる"} />
        </Cart>
      )}
    </div>
  );
};

Index.getLayout = ShopLayout;

export default Index;
