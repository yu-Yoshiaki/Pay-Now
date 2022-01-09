/* eslint-disable no-console */
// import { signInWithEmailAndPassword } from "firebase/auth";
import type { CustomNextPage } from "next";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
// import { auth } from "src/lib/firebase";
import { ShopLayout } from "src/pages/shop/layout/ShopLayout";

const Login: CustomNextPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const [isEmail, setEmail] = useState(process.env.NEXT_PUBLIC_DEFAULT_FIREBASE_AUTH_EMAIL);
  const [isPassword, setPassword] = useState(process.env.NEXT_PUBLIC_DEFAULT_FIREBASE_AUTH_PASSWORD);

  /* 
    本番用 
  
  const login = useCallback(async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, isEmail, isPassword);
      res.user && router.replace("/shop");
    } catch (error) {
      console.log("error", error);
      return;
    }
  }, [isEmail, isPassword, router]);

  */

  const login = () => {
    router.push("/shop");
  };

  return (
    <div>
      <h2 className="p-10 text-3xl font-bold text-center">ログイン</h2>
      <form onSubmit={handleSubmit(login)} className="p-10 mx-auto max-w-[800px] text-center">
        <input
          {...register("email")}
          placeholder="email"
          autoComplete="email"
          defaultValue={isEmail}
          className="py-4 px-5 mx-auto mb-5 w-full text-lg rounded-md border border-black"
          // eslint-disable-next-line react/jsx-handler-names
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          {...register("password")}
          type="password"
          placeholder="password"
          autoComplete="password"
          defaultValue={isPassword}
          className="py-4 px-5 mx-auto mb-5 w-full text-lg rounded-md border border-black"
          // eslint-disable-next-line react/jsx-handler-names
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" className="py-6 px-8 hover:bg-green-200" />
      </form>
    </div>
  );
};

Login.getLayout = ShopLayout;

export default Login;
