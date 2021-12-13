import type { CustomLayout } from "next";
import { Footer } from "src/layout/Footer";
import { Header } from "src/layout/Header";

import { Left } from "./Left";

export const TwitterLayout: CustomLayout = (page) => {
  return (
    <div>
      <div className="fixed z-20 w-full">
        <div className="py-3 w-full text-center bg-yellow-400">ベータ版になります。実際には購入されません。</div>
        <Header />
      </div>

      <main className="grid grid-cols-[auto,50%,auto] p-12 pt-[160px] space-x-5 min-h-screen bg-gray-100">
        <Left />
        {page}
      </main>

      <Footer />
    </div>
  );
};
