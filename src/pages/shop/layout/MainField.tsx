import { ServiceName } from "src/lib/serviceName";

export const MainField = () => {
  return (
    <div className="pt-32">
      <div className="bg-image-checkout">
        <div className="py-3 px-4 text-left text-white bg-black bg-opacity-25 md:py-12 md:px-16">
          <div className="text-5xl font-bold md:text-6xl">
            <p>Zero Step Checkout.</p>
          </div>
          <p className="py-20 text-3xl font-bold md:text-4xl">
            {ServiceName}では、購入もキャンセルも 1 Click！
            <br />
            ストレスフリーな高速決済を採用しています。
          </p>
        </div>
      </div>
    </div>
  );
};
