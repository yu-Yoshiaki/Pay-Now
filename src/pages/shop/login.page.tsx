/* eslint-disable no-console */
import { signInWithEmailAndPassword } from "firebase/auth";
import type { CustomNextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { auth } from "src/lib/firebase";
import { ShopLayout } from "src/pages/shop/layout/ShopLayout";

const Login: CustomNextPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const login = useCallback(
    async (e: { email: string; password: string }) => {
      try {
        const res = await signInWithEmailAndPassword(auth, e.email, e.password);
        if (res.user) return router.push("/shop");
      } catch {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorCode);
        // return error;
        console.log("error");
        return;
      }
    },
    [router]
  );

  const onSubmit = useCallback(
    (e) => {
      login(e);
    },
    [login]
  );

  return (
    <div>
      <h2 className="p-10 text-3xl font-bold text-center">ログイン</h2>
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

      {/* {user?.email} */}
    </div>
  );
};

Login.getLayout = ShopLayout;

export default Login;
