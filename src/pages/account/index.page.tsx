import type { CustomNextPage } from "next";
import { TwitterLayout } from "src/pages/account/layout/TwitterLayout";

const Info = {
  name: {
    first: "yumoto",
    last: "yoshiaki",
  },
  email: "test0001@gmail.com",
};

const Home: CustomNextPage = () => {
  return (
    <div className="space-y-2">
      <h3>Profile</h3>

      <div className="flex justify-between">
        <div className="p-7 w-[49%] bg-white rounded-md">
          <p className="text-sm">First Name</p>
          <p className="text-xl font-bold">{Info.name.first}</p>
        </div>
        <div className="p-7 w-[49%] bg-white rounded-md">
          <p className="text-sm">Last Name</p>
          <p className="text-xl font-bold">{Info.name.last}</p>
        </div>
      </div>

      <div className="p-10 bg-white rounded-md">
        <p className="text-sm">Email</p>
        <p className="text-xl font-bold">{Info.email}</p>
      </div>
    </div>
  );
};
Home.getLayout = TwitterLayout;

export default Home;
