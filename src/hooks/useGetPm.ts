import { useCallback, useEffect, useState } from "react";

/* 
  stripeのpaymentMethodを取得用
*/
export const useGetPm = () => {
  const [id, setId] = useState<string>();

  const getPm = useCallback(async () => {
    const res = await fetch(`/api/getPaymentMethod/${"cus_KnyAyac2neR58V"}`);
    const json = await res.json();
    const pmId = json.paymentMethod;

    setId(pmId);
  }, []);

  useEffect(() => {
    getPm();
  }, [getPm]);

  return { id };
};
