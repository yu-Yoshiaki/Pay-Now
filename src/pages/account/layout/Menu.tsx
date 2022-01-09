import Link from "next/link";
import type { VFC } from "react";

const links = [
  { href: "/", text: "Profile" },
  { href: "/", text: "Address" },
  { href: "/payment", text: "Payment" },
];

export const Menu: VFC = () => {
  return (
    <div className="flex md:flex-col">
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
