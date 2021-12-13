import type { CustomNextPage } from "next";
import { TwitterLayout } from "src/pages/account/layout/TwitterLayout";

const Payment: CustomNextPage = () => {
  return (
    <div>
      <div className="text-xl font-bold">お支払い情報</div>
    </div>
  );
};

Payment.getLayout = TwitterLayout;

export default Payment;
