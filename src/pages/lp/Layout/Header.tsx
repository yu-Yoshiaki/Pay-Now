import Link from "next/link";
import type { ReactChild, VFC } from "react";

// type Props = {
//   childlen?: ReactChild;
// };

export const Header: VFC<{
  children?: ReactChild;
}> = (props) => {
  const items = [
    { href: "/shop", label: "SHOP" },
    { href: "/", label: "CONTACT" },
  ];
  return (
    <div className="flex justify-between items-center">
      <h1 className="p-5 text-3xl font-bold text-left">
        <Link key={"/lp"} href={"/lp"}>
          Pay Now
        </Link>{" "}
      </h1>
      <div className="hidden mr-5 md:block">
        {items.map((item) => {
          return (
            <Link key={item.href} href={item.href}>
              <a className="inline-block p-5 hover:p-4 text-lg hover:text-xl font-bold hover:text-blue-600">
                {item.label}
              </a>
            </Link>
          );
        })}
        {props.children && <div className="inline-block">{props.children}</div>}
      </div>
    </div>
  );
};
