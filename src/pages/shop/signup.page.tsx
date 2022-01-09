/* eslint-disable react/jsx-handler-names */
/* eslint-disable no-console */
import type { CustomNextPage } from "next";
// import Link from "next/link";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
import { ShopLayout } from "src/pages/shop/layout/ShopLayout";

// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useCallback, useState } from "react";
// import { useStripeid } from "src/hooks/useStripeid";
// import { auth } from "src/lib/firebase";

const Signup: CustomNextPage = () => {
  // const { register, handleSubmit } = useForm();
  // const { stripeId, setStripeId } = useStripeid();
  // const [, setEmail] = useState("");
  // const [, setPassword] = useState("");

  // 本番用　ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー
  // const createFirebaseAccount = useCallback(async (email: string, password: string) => {
  //   try {
  //     const res = await createUserWithEmailAndPassword(auth, email, password);
  //     const user = res.user;

  //     return user.uid;
  //   } catch (error) {
  //     return console.log(error);
  //   }
  // }, []);

  // const createStripeAccount = useCallback(async (email: string) => {
  //   try {
  //     const res = await fetch("/api/createStripeAccount", {
  //       method: "POST",
  //       body: email,
  //     });
  //     const stripeId = await res.json();

  //     return stripeId.customerId;
  //   } catch (error) {
  //     return console.log(error);
  //   }
  // }, []);

  // const onSubmit = useCallback(async () => {
  //   const uid = await createFirebaseAccount(isEmail, isPassword);
  //   if (!uid) return window.alert("このアカウントは既に使用されています。");

  //   const stripeId = await createStripeAccount(isEmail);
  //   setStripeId(stripeId);

  //   window.alert("Success!! created your account.");

  //   // return router.push("/shop");
  //   return;
  // }, [createFirebaseAccount, createStripeAccount, isEmail, isPassword, setStripeId]);
  // 本番用　ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー

  return (
    <div>
      {/* <h2 className="p-10 text-3xl font-bold text-center">ユーザー登録</h2>
      SID: {stripeId}
      <form onSubmit={handleSubmit(onSubmit)} className="p-10 mx-auto max-w-[800px] text-center">
        <input
          {...register("email")}
          type="email"
          placeholder="email"
          autoComplete="email"
          className="py-4 px-5 mx-auto mb-5 w-full text-lg rounded-md border border-black"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          autoComplete="password"
          className="py-4 px-5 mx-auto mb-5 w-full text-lg rounded-md border border-black"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" className="py-6 px-8 hover:bg-green-200" />
      </form>
      <div className="text-center">
        登録済みの方
        <Link href={"/shop/login"}>
          <a className="text-blue-400">ログイン</a>
        </Link>
      </div> */}
    </div>
  );
};

Signup.getLayout = ShopLayout;
export default Signup;
