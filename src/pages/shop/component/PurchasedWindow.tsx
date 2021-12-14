import Image from "next/image";
import type { ReactChild } from "react";

export const PurchasedWindow = (props: { time: number; children?: ReactChild }) => {
  return (
    <div className="p-5 space-y-1 w-60 text-white bg-green-700 rounded-md">
      <div className="flex items-center space-x-2">
        <Image src="/check.png" alt={"チェックマーク"} width={35} height={35} />
        <p className="font-bold text-center">購入済み</p>
      </div>
      <p className="text-xs text-left whitespace-normal">
        <strong className="text-sm">{props.time}</strong>秒 決済完了まで商品の追加、編集、キャンセルが可能です。
      </p>
      {props.children ?? ""}
    </div>
  );
};
