/* eslint-disable no-console */
import "tailwindcss/tailwind.css";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { memo, useEffect } from "react";
import { useUser } from "src/hooks/useUser";
import { app } from "src/lib/firebase";
import { ServiceName } from "src/lib/serviceName";

const App = (props: CustomAppProps) => {
  const auth = getAuth(app);
  const { setUser } = useUser();

  useEffect(() => {
    //ログイン状況判定
    //　ログイン中 → Stateにユーザー情報追加
    //　ログアウト → Stateを空に
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(undefined);
      }
    });
  }, [auth, setUser]);

  const getLayout =
    props.Component.getLayout ||
    ((page) => {
      return page;
    });

  return (
    <>
      <Head>
        <title>{ServiceName}</title>
      </Head>
      {/* {time} */}
      {getLayout(<props.Component {...props.pageProps} />)}
    </>
  );
};

export default memo(App);
