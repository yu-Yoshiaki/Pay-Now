import type { User } from "firebase/auth";
import { useRouter } from "next/dist/client/router";
import { auth } from "src/lib/firebase";
// import type { KeyedMutator } from "swr";
import useSWR from "swr";

/*
　ユーザー管理
 firebaseにログインすると、情報をキャッシュに一時保存される
*/
export const useUser = () => {
  const router = useRouter();
  const { data: user, mutate: setUser } = useSWR<User>("/user", null, {
    fallbackData: undefined,
  });

  const signOut = () => {
    auth.signOut();
    setTimeout(() => {
      router.push("/");
    }, 200);
  };

  return { user, setUser, signOut };
};
