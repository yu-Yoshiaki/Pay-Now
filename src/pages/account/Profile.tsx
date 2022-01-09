/* eslint-disable react/jsx-handler-names */
// import type { User } from "firebase/auth";
// import { onAuthStateChanged } from "firebase/auth";
// import { useRouter } from "next/dist/client/router";
// import { useCallback, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useUserProfile } from "src/hooks/useUserProfile";
// import { auth } from "src/lib/firebase";

export const Profile = () => {
  // const { setData, firstName, setFirstName, lastName, setLastName, getData } = useUserProfile();
  // const { register, handleSubmit } = useForm();
  // const [isButton, openButton] = useState(false);
  // const router = useRouter();
  // const [user, setUser] = useState<User>();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser(user);
  //       getData();
  //     } else {
  //       router.push("/");
  //     }
  //     unsubscribe();
  //   });
  // }, [getData, router]);

  // const onSubmit = useCallback(() => {
  //   setData();
  //   return openButton(false);
  // }, [setData]);

  // const handleFocus = useCallback(() => {
  //   openButton(true);
  // }, []);

  // const handleCancel = useCallback(() => {
  //   openButton(false);
  // }, []);

  // const handleSignOut = () => {
  //   auth.signOut();
  //   router.push("/")
  //   return;
  // };

  // const handleSignOut = () => {
  //   return router.push("/");
  // };

  // const onSubmit = useCallback(() => {
  //   return openButton(false);
  // }, []);

  return (
    <div className="space-y-2">
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between" onFocus={handleFocus}>
          <div className="p-7 w-[49%] bg-white rounded-md">
            <p className="text-sm text-gray-500">First Name</p>
            <input
              {...register("firstName")}
              placeholder="First Name"
              defaultValue={firstName}
              className="w-full text-xl font-bold"
              onChange={(e) => {
                return setFirstName(e.target.value);
              }}
            />
          </div>
          <div className="p-7 w-[49%] bg-white rounded-md">
            <p className="text-sm text-gray-500">Last Name</p>
            <input
              {...register("lastName")}
              placeholder="Last Name"
              defaultValue={lastName}
              className="w-full text-xl font-bold"
              // onFocus={handleFocus}
              onChange={(e) => {
                return setLastName(e.target.value);
              }}
            />
          </div>
        </div>
        {isButton && (
          <div className="text-right">
            <button onClick={handleCancel}>キャンセル</button>
            <input type="submit" className="py-6 px-8 hover:bg-green-200" />{" "}
          </div>
        )}
      </form>

      <div className="p-10 bg-white rounded-md">
        <p className="text-sm text-gray-500">Email</p>
        <p className="text-xl font-bold">{user?.email}</p>
      </div>

      <div className="text-center">
        <button className="py-5 text-lg text-center text-blue-400 " onClick={handleSignOut}>
          ログアウト
        </button>
      </div> */}
    </div>
  );
};
