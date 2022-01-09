/* eslint-disable no-console */
/* eslint-disable react/jsx-handler-names */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import type { CustomNextPage } from "next";
import { useGetClientSecret } from "src/hooks/useGetClientSecret";
import { TwitterLayout } from "src/pages/account/layout/TwitterLayout";

import { SetupForm } from "./SetupForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

const Payment: CustomNextPage = () => {
  const { clientSecret } = useGetClientSecret();

  const options = {
    clientSecret,
  };

  return (
    <div>
      <div className="text-xl font-bold">お支払い情報</div>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          <SetupForm />
        </Elements>
      )}
    </div>
  );
};

Payment.getLayout = TwitterLayout;

export default Payment;
