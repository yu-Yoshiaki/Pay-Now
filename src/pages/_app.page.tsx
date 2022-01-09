import "tailwindcss/tailwind.css";

import type { CustomAppProps } from "next/app";
import Head from "next/head";
import { memo } from "react";
import { ServiceName } from "src/lib/serviceName";

const App = (props: CustomAppProps) => {
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
