/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */
import { loadStripe } from "@stripe/stripe-js";
import type { CustomNextPage } from "next";
import { useCallback } from "react";
import { useEffect } from "react";
import { useGetStripeMaterials } from "src/hooks/useGetStripeMaterials";
import { useItemList } from "src/hooks/useItemList";
import { useSWRState } from "src/hooks/useSWRState";
import { useTimer } from "src/hooks/useTimer";

import { Cart } from "./Cart";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainField } from "./MainField";
import { MaterialsList } from "./MaterialsList";
import { OpenCartButton } from "./OpenCartButton";

export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// const testItem: { id: string; name: string; images: string[] }[] = [
//   { id: "prod_KXSBHxeY7TwFs4", name: `Tshirts`, images: ["/Tshirts.png"] },
//   { id: "prod_Kfzuvy8rA5cGHk", name: `watch`, images: ["/watch.jpeg"] },
//   { id: "prod_ueol6FLHgjakj0", name: `phone`, images: ["/iphone13.jpeg"] },
// ];

const Index: CustomNextPage = () => {
  const { data: isCartView } = useSWRState("isCartView", false);
  const { time, timerStart, isComplete } = useTimer();
  const { isItemList, addItem, removeItem } = useItemList();

  useEffect(() => {
    if (isComplete) window.alert("Complete!! Thank you for your purchase! (Beta)");
    return;
  }, [isComplete]);

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

  const { data: materials, isError, isLoading } = useGetStripeMaterials();
  if (isError) return <div>error</div>;
  if (isLoading) return <div>Loding...</div>;
  if (materials === undefined) return <div>Data isNothing...</div>;
  const products = materials.products;

  return (
    <div>
      <div className="fixed z-20 w-full">
        <div className="py-3 w-full text-center bg-yellow-400">ベータ版になります。実際には購入されません。</div>
        <Header>
          <OpenCartButton text={"Cart"} />
        </Header>
      </div>

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
        {products.map((item) => {
          return (
            <MaterialsList
              time={time}
              key={item.id}
              id={item.id}
              name={item.name}
              images={item.images}
              onClick={handleAddinCart}
            />
          );
        })}
      </div>

      <Footer />

      {isCartView && (
        <Cart time={time} itemsList={isItemList} onClick={handleRemove}>
          <OpenCartButton text={"閉じる"} />
        </Cart>
      )}
    </div>
  );
};

export default Index;
