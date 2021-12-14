import type { CustomNextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUser } from "src/hooks/useUser";
import { useUserProfile } from "src/hooks/useUserProfile";
import { TwitterLayout } from "src/pages/account/layout/TwitterLayout";

const Home: CustomNextPage = () => {
  const { user } = useUser();
  const { profile, getData, setData } = useUserProfile();
  const { register, handleSubmit } = useForm();
  const [isButton, openButton] = useState(false);

  useEffect(() => {
    if (user) getData();
  }, [getData, user]);

  const onSubmit = useCallback(
    (e: { firstName: string; lastName: string }) => {
      setData({ firstName: e.firstName, lastName: e.lastName });
      return;
    },
    [setData]
  );

  const handleFocus = useCallback(() => {
    openButton(true);
  }, []);

  const handleCancel = useCallback(() => {
    openButton(false);
  }, []);

  return (
    <div className="space-y-2">
      <h3>Profile</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <div className="p-7 w-[49%] bg-white rounded-md">
            <p className="text-sm text-gray-500">First Name</p>
            <input
              {...register("firstName")}
              placeholder="First Name"
              defaultValue={profile.firstName}
              onFocus={handleFocus}
              className="w-full text-xl font-bold"
            />
          </div>
          <div className="p-7 w-[49%] bg-white rounded-md">
            <p className="text-sm text-gray-500">Last Name</p>
            <input
              {...register("lastName")}
              placeholder="Last Name"
              defaultValue={profile.lastName}
              onFocus={handleFocus}
              className="w-full text-xl font-bold"
            />
          </div>
        </div>
        {isButton && (
          <div>
            <button onClick={handleCancel}>キャンセル</button>
            <input type="submit" className="py-6 px-8 hover:bg-green-200" />{" "}
          </div>
        )}
      </form>

      <div className="p-10 bg-white rounded-md">
        <p className="text-sm text-gray-500">Email</p>
        <p className="text-xl font-bold">{user?.email}</p>
      </div>
    </div>
  );
};
Home.getLayout = TwitterLayout;

export default Home;
