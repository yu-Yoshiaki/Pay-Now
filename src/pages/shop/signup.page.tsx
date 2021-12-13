/* eslint-disable no-console */
import { createUserWithEmailAndPassword } from "firebase/auth";
import type { CustomNextPage } from "next";
import Link from "next/link";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { auth } from "src/lib/firebase";
import { ShopLayout } from "src/pages/shop/layout/ShopLayout";

const Signup: CustomNextPage = () => {
  const { register, handleSubmit } = useForm();

  // const getStripeAccount = useCallback(async (email: string) => {
  //   try {
  //     const res = await fetch("/api/createStripeAccount", {
  //       method: "POST",
  //       body: email,
  //     });
  //     const json = await res.json();
  //     console.log("getStripeAccount user:", json);
  //     return json.customers;
  //   } catch (error) {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode, errorMessage);
  //   }
  // }, []);

  const createFirebaseAccount = useCallback(async (email: string, password: string) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;

      return user.uid;
    } catch (error) {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      console.log(error);

      return;
    }
  }, []);

  const onSubmit = useCallback(
    async (e: { email: string; password: string }) => {
      const uid = await createFirebaseAccount(e.email, e.password);
      if (!uid) return window.alert("このアカウントは既に使用されています。");

      console.log(uid);

      return window.alert(" Success!! created your account.");
    },
    [createFirebaseAccount]
  );

  return (
    <div>
      <h2 className="p-10 text-3xl font-bold text-center">ユーザー登録</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="p-10 mx-auto max-w-[800px] text-center">
        <input
          {...register("email")}
          placeholder="email"
          autoComplete="email"
          className="py-4 px-5 mx-auto mb-5 w-full text-lg rounded-md border border-black"
        />
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          autoComplete="password"
          className="py-4 px-5 mx-auto mb-5 w-full text-lg rounded-md border border-black"
        />
        <input type="submit" className="py-6 px-8 hover:bg-green-200" />
      </form>

      <div className="text-center">
        登録済みの方
        <Link href={"/shop/login"}>
          <a className="text-blue-400">ログイン</a>
        </Link>
      </div>
    </div>
  );
};

Signup.getLayout = ShopLayout;
export default Signup;
