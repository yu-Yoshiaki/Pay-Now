/* eslint-disable tailwindcss/no-custom-classname */
import type { CustomNextPage } from "next";

import { Demo, Header, MainField } from "./Layout";

const items = [
  { id: 1, name: "watch", price: 3000, image: "/watch.jpeg" },
  { id: 2, name: "T-shirts", price: 2500, image: "/Tshirts.png" },
  { id: 3, name: "Iphone 13", price: 146800, image: "/iphone13.jpeg" },
];

const Index: CustomNextPage = () => {
  return (
    <div>
      <Header />
      <div className="bg-image-checkout">
        <div className="items-center bg-black bg-opacity-25 md:grid md:grid-cols-2 md:h-[600px]">
          <MainField />
          <div className="overflow-auto py-6 space-x-4 whitespace-nowrap scrollbar-hide">
            {items.map((item) => {
              return <Demo key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
