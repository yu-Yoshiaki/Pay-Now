import Link from "next/link";
import type { VFC } from "react";

const links = [
  { href: "/", text: "Profile" },
  { href: "/address", text: "Address" },
  { href: "/payment", text: "Payment" },
];

export const Left: VFC = () => {
  return (
    <div className="flex flex-col">
      {links.map((link) => {
        return (
          <Link key={link.href} href={`/account${link.href}`}>
            <a className="p-3 text-xl font-bold text-right">{link.text}</a>
          </Link>
        );
      })}
    </div>
  );
};
