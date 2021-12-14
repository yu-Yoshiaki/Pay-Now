import type { KeyedMutator } from "swr";
import useSWR from "swr";

export const useSWRState = <S>(key: string, fallbackData: S): [S, KeyedMutator<S>] => {
  const { data, mutate } = useSWR(key, null, {
    fallbackData,
  });

  return [data as S, mutate];
};
