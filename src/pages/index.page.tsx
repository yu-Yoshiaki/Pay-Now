import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";

const Home: NextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/shop");
  });
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Home;
