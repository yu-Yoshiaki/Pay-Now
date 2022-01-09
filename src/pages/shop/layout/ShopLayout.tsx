import type { CustomLayout } from "next";
import { Header } from "src/layout/Header";
// import { Menu } from "src/layout/Menu";

export const ShopLayout: CustomLayout = (page) => {
  return (
    <div>
      <div className="fixed z-20 w-full">
        <div className="py-3 w-full text-lg font-bold text-center bg-white">
          ベータ版にのため、実際には購入されません。
        </div>
        <Header />
      </div>

      <main className="py-32">{page}</main>
    </div>
  );
};
