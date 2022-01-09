/* stripe Element用シークレットID取得用 */

import { useCallback, useEffect, useState } from "react";
import { useGetPm } from "src/hooks/useGetPm";
import { useStripeid } from "src/hooks/useStripeid";

export const useGetClientSecret = () => {
  const { stripeId } = useStripeid();
  const [clientSecret, setClientSecret] = useState<string>();
  const { id } = useGetPm();

  const Element = useCallback(async () => {
    if (!id) {
      // eslint-disable-next-line no-console
      console.log("kidou");

      const res = await fetch("/api/setCard", {
        method: "POST",
        body: stripeId,
      });
      const json = await res.json();
      setClientSecret(json.clientSecret);
    }
  }, [id, stripeId]);

  useEffect(() => {
    Element();
  }, [Element]);

  return { clientSecret };
};
