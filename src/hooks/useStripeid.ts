import { useSWRState } from "src/hooks/useSWRState";

export const useStripeid = () => {
  const [stripeId, setStripeId] = useSWRState("/stripeid", "");

  return { stripeId, setStripeId };
};
