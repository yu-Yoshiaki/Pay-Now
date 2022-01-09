import Image from "next/image";
import { CompletePaymentPopup } from "src/component/CompletePaymentPopup";

type Props = {
  name: string;
  price: number;
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

export const Card = (props: Props) => {
  return (
    <div className="relative p-5 space-y-5 w-[300px] text-center bg-white rounded-lg shadow-sm">
      <div>
        <Image
          src={props.image.src}
          alt={props.image.alt}
          // src={"/no_image.jpg"}
          // alt={"not image data"}
          width={props.image.width ?? 300}
          height={props.image.height ?? 280}
        />
      </div>
      <div className="flex justify-between text-black">
        <p className="overflow-hidden w-44 h-14 text-left">{props.name}</p>
        <p>¥ {props.price}</p>
      </div>

      <CompletePaymentPopup />
    </div>
  );
};
