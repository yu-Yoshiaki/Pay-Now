/* eslint-disable no-console */
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import Link from "next/link";
import type { VFC } from "react";
import { useUser } from "src/hooks/useUser";
import { ServiceName } from "src/lib/serviceName";
import { OpenCartButton } from "src/pages/shop/component/OpenCartButton";

// type Props = {
//   childlen?: ReactChild;
// };
// const items = [
//   // { href: "/shop", label: "SHOP" },
//   { href: "/", label: "CONTACT" },
// ];

export const Header: VFC = () => {
  const router = useRouter();
  const { user, signOut } = useUser();

  const handleSignOut = () => {
    signOut();
  };
  const handleSignup = () => {
    router.push("/shop/signup");
  };

  return (
    <header className="flex justify-between items-center w-full bg-white border-b">
      <h1 className="p-5 text-left">
        <Link key={"/"} href={"/"}>
          <a>
            <span className="text-3xl font-bold">SHOP</span>{" "}
            <span className="text-lg font-bold"> by {ServiceName}</span>
          </a>
        </Link>{" "}
      </h1>
      {user ? (
        <div className="flex space-x-3">
          <div className="rounded-full hover:ring">
            <Link href="/account">
              <a>
                <Image src={"/no_image.jpg"} alt={"profile image"} width={60} height={50} className="rounded-full" />
              </a>
            </Link>
          </div>
          <button onClick={handleSignOut} className="text-blue-400">
            SignOut
          </button>
        </div>
      ) : (
        <button onClick={handleSignup} className="text-blue-400">
          ユーザー登録
        </button>
      )}

      <div className="flex mr-2 md:mr-5">
        {/* <div className="hidden md:block">
          {items.map((item) => {
            return (
              <Link key={item.href} href={item.href}>
                <a className="inline-block p-5 hover:p-4 text-lg hover:text-xl font-bold hover:text-blue-600">
                  {item.label}
                </a>
              </Link>
            );
          })}
        </div> */}
        <div className="inline-block">
          <OpenCartButton text={"Cart"} />
        </div>
      </div>
    </header>
  );
};
