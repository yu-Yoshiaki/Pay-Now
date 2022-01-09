import { useCheckout } from "src/hooks/useCheckout";

type Props = {
  isBackgroundColor: string;
  isButtonText: string;
};

export const Buy = (props: Props) => {
  const { handleClick } = useCheckout();
  return (
    <div className="space-x-2">
      <button onClick={handleClick} className={`p-3 w-full h-12 text-white rounded-md ${props.isBackgroundColor}`}>
        {props.isButtonText}
      </button>
    </div>
  );
};
