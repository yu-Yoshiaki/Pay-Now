import type { CustomNextPage } from "next";

import { Demo } from "./Demo";

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
        <div className="items-center h-[600px] bg-black bg-opacity-25 md:grid md:grid-cols-2">
          <MainField />
          <div className="overflow-auto py-6 space-x-4 whitespace-nowrap scrollbar-hide">
            {items.map((item) => {
              return <Demo key={item.id} item={item} />;
            })}
          </div>
        </div>
      </div>
      <Benefit />
    </div>
  );
};

const Header = () => {
  const items = [
    { href: "/", label: "SHOP" },
    { href: "/", label: "CONTACT" },
  ];
  return (
    <div className="flex justify-between items-center">
      <h1 className="p-5 text-3xl font-bold text-left">Pay Now</h1>
      <div>
        {items.map((item) => {
          return (
            <a key={item.href} className="inline-block p-5 text-lg font-bold hover:text-white hover:bg-blue-600">
              {item.label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

const MainField = () => {
  return (
    <div className="py-12 px-16 text-left text-white">
      <p className="text-6xl font-bold">1-Click Checkout.</p>
      <p className="text-6xl font-bold">Zero Step.</p>
      <p className="py-20 text-4xl font-bold">
        Pay Nowは、「今すぐ欲しい」を実現する高速決済システムです。
        <br />
        新しい購入体験の世界へ。
      </p>
    </div>
  );
};

const Benefit = () => {
  return (
    <div>
      <h3 className="p-6 w-full text-2xl font-bold text-center text-white bg-black">利点</h3>
      <div className="items-center h-[500px] md:grid md:grid-cols-2">
        <h4 className="text-3xl">高速決済による購買体験の向上！ 「今すぐ欲しい」を実現</h4>
        <p>欲しいと思ったその場で、直感的に購入が可能。余計なステップを踏まないので、離脱率低下につながります。</p>
      </div>

      <div className="items-center h-[500px] md:grid md:grid-cols-2">
        <p>02. 購入までのステップを無くすことで、お客様の離脱率（カゴ落ち など）を下げます。</p>
      </div>
    </div>
  );
};

export default Index;
