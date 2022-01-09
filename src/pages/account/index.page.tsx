import type { CustomNextPage } from "next";
import { TwitterLayout } from "src/pages/account/layout/TwitterLayout";
import { Profile } from "src/pages/account/Profile";

const Home: CustomNextPage = () => {
  return (
    <div>
      <Profile />
    </div>
  );
};

Home.getLayout = TwitterLayout;

export default Home;
