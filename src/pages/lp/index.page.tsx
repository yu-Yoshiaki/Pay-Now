import type { CustomNextPage } from "next";

import { Demo } from "./Demo";

const items = [
  { id: 1, name: "watch", price: 3000, image: "/watch.jpeg" },
  { id: 2, name: "watch", price: 4000, image: "/watch.jpeg" },
  { id: 3, name: "Iphone 13", price: 146800, image: "/iphone13.jpeg" },
];

const Index: CustomNextPage = () => {

  return (
    <div className="py-5 text-center bg-white md:mx-auto md:w-1/2">
      <Header />
      <MainField />

      <div className="overflow-auto py-6 space-x-4 whitespace-nowrap bg-gray-200 ">
        {items.map((item) => {
          return <Demo key={item.id} item={item} />;
        })}
      </div>
      <Benefit />
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h1 className="px-2 pb-2 text-3xl font-bold text-left">Pay Now</h1>
    </div>
  );
};

const MainField = () => {
  return (
    <div className="py-12 h-36 text-left bg-blue-300">
      <h1 className="text-2xl">Pay Nowとは</h1>
      <p className="px-4">
        Pay Nowの「今すぐ欲しい」を実現する高速決済システムの開発をしています。
        今までにない新しい購買体験を提供いたします。
      </p>
    </div>
  );
};

const Example = () => {
  return (
    <div>
      <p>WEBサービスに導入</p>
      <ul>
        <li></li>
      </ul>
    </div>
  );
};

const Benefit = () => {
  return (
    <div>
      <p>特徴</p>
      <ul>
        <li>
          <p>01. 高速決済による購買体験の向上！ 「今すぐ欲しい」を実現</p>
        </li>
        <li>
          <p>02. 購入までのステップを無くすことで、お客様の離脱率（カゴ落ち など）を下げます。</p>
        </li>
      </ul>
    </div>
  );
};

export default Index;
