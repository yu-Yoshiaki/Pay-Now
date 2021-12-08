/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
// import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
// import { useCallback, useEffect, useState } from "react";

// export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

// const SetCard = () => {
//   const [clientSecret, setClientSecret] = useState();

//   const getClientSecret = useCallback(async () => {
//     const res = await fetch("/api/stripe/dev/setCard");
//     const json = await res.json();
//     console.log(json);

//     setClientSecret(json.clientSecret);
//   }, []);

//   useEffect(() => {
//     getClientSecret();
//   }, [getClientSecret]);

//   if (clientSecret) console.log(clientSecret);

//   const appearance = {
//     theme: "night",
//     labels: "floating",
//   };

//   const options = {
//     clientSecret,
//     appearance,
//   };

//   return (
//     <div style={{ padding: 24 }}>
//       カード詳細を記入してください
//       <div style={{ maxWidth: 760 }}>
//         {clientSecret && (
//           <Elements stripe={stripePromise} options={options}>
//             <SetCardForm />
//           </Elements>
//         )}
//       </div>
//     </div>
//   );
// };

// const SetCardForm = () => {
//   const elements = useElements();
//   const stripe = useStripe();
//   const [errorMessage, setErrorMessage] = useState<string | undefined | null>(null);

//   const handleSubmit = async (e: { preventDefault: () => void }) => {
//     e.preventDefault();
//     if (!elements || !stripe) return;

//     const { error } = await stripe.confirmSetup({
//       elements,
//       confirmParams: {
//         return_url: "http://localhost:3000/dev/stripe/setCard",
//       },
//     });

//     if (error.type === "card_error" || error.type === "validation_error") {
//       setErrorMessage(error.message);
//     } else {
//       setErrorMessage("An unexpected error occured.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button type="submit" disabled={!stripe}>
//         送信
//       </button>
//       {errorMessage && <div>{errorMessage}</div>}
//     </form>
//   );
// };

// export default SetCard;

const Test = () => {
  return <div></div>;
};
export default Test;
