import type { CustomLayout } from "next";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";

import { Menu } from "./Menu";

export const TwitterLayout: CustomLayout = (page) => {
  return (
    <div>
      <div className="fixed z-20 w-full">
        <div className="py-3 w-full text-center bg-yellow-400">ベータ版になります。実際には購入されません。</div>
        <Header />
      </div>

      <main className="p-3 pt-[160px] space-y-5 min-h-screen bg-gray-100 md:grid md:grid-cols-[auto,50%,auto] md:p-12 md:pt-[180px] md:space-x-5">
        <Menu />
        {page}
      </main>

      <Footer />
    </div>
  );
};
