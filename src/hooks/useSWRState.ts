import useSWR from "swr";

export const useSWRState = <S>(key: string, fallbackData: S) => {
  const { data, mutate, error } = useSWR(key, null, {
    fallbackData: fallbackData,
  });

  return {
    data,
    mutate,
    isLoading: !error && !data,
    isError: error,
  };
};
