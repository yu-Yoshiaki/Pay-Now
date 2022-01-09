/* eslint-disable react/jsx-handler-names */
// import { loadStripe } from "@stripe/stripe-js";
import type { CustomNextPage } from "next";
import { useEffect } from "react";
import { useCompletePurchase } from "src/hooks/useCompletePurchase";
import { useTimer } from "src/hooks/useTimer";
import { ShopLayout } from "src/pages/shop/layout/ShopLayout";

import { ProductList } from "./component/Product/List";

// export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Index: CustomNextPage = () => {
  const { time } = useTimer();
  const { message } = useCompletePurchase();

  useEffect(() => {
    // 決済完了でメッセージ
    if (time < 0) return window.alert("Complete.");
    // eslint-disable-next-line no-console
    message && console.log(message);
  }, [message, time]);

  return (
    <div>
      <div className="flex flex-col justify-center bg-blue- p-4 space-y-4 text-center md:block md:h-{600px}">
        <ProductList />
      </div>
    </div>
  );
};

Index.getLayout = ShopLayout;

export default Index;
