import { useRouter } from "next/dist/client/router";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { Header } from "./Header";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onSubmit = useCallback(
    async (data) => {
      const res = await fetch("/api/loginOrSignup", {
        method: "POST",
        body: data.email,
      });
      const json = await res.json();

      if (json.error) return;

      router.push(`/shop/?email=${json.email}&customer=${json.stripeId}&card=${json.cardID}`);
    },
    [router]
  );

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)} className="p-10 mx-auto max-w-[800px] text-center">
        <input
          {...register("email")}
          placeholder="email"
          defaultValue="teststripe@example.com"
          className="py-4 px-5 mx-auto mb-5 w-full text-lg rounded-md border border-black"
        />
        <input type="submit" className="py-6 px-8 hover:bg-green-200" />
      </form>
    </div>
  );
};
export default Login;
