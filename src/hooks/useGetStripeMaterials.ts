import type Stripe from "stripe";
import useSWR from "swr";

const fetcher = async (url: RequestInfo) => {
  const res = await fetch(url);
  return await res.json();
};

export const useGetStripeMaterials = () => {
  const { data, error } = useSWR<{ products: Stripe.Product[] }>("/api/getMaterials", fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
