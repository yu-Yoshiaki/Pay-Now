import Link from "next/link";
import type { ReactChild, VFC } from "react";
import { ServiceName } from "src/lib/serviceName";

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
    <header className="flex justify-between items-center w-full bg-white border-b">
      <h1 className="p-5 text-3xl font-bold text-left">
        <Link key={"/"} href={"/"}>
          {ServiceName}
        </Link>{" "}
      </h1>
      <div className="flex mr-2 md:mr-5">
        <div className="hidden md:block">
          {items.map((item) => {
            return (
              <Link key={item.href} href={item.href}>
                <a className="inline-block p-5 hover:p-4 text-lg hover:text-xl font-bold hover:text-blue-600">
                  {item.label}
                </a>
              </Link>
            );
          })}
        </div>
        {props.children && <div className="inline-block">{props.children}</div>}
      </div>
    </header>
  );
};
