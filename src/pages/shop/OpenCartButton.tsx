import type { VFC } from "react";
import { useCallback } from "react";
import { useSWRState } from "src/hooks/useSWRState";

type Props = {
  text: string;
};

export const OpenCartButton: VFC<Props> = (props) => {
  const { data: isCartView, mutate: onCartView } = useSWRState("isCartView", false);

  const handleOpenCart = useCallback(() => {
    onCartView(!isCartView);
    return;
  }, [isCartView, onCartView]);

  return (
    <button
      onClick={handleOpenCart}
      className="p-5 rounded-lg border border-gray-300 md:w-[100px] md:hover:text-white md:hover:bg-blue-500"
    >
      {props.text}
    </button>
  );
};
