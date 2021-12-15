import type { CustomLayout } from "next";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";

export const ShopLayout: CustomLayout = (page) => {
  return (
    <div>
      <div className="fixed z-20 w-full">
        <div className="py-3 w-full text-center bg-yellow-400">ベータ版になります。実際には購入されません。</div>
        <Header />
      </div>

      <main className="py-16">{page}</main>
      <Footer />
    </div>
  );
};
