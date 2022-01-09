// 本番では、ファイル名を変更 「.page.tsx→.tsx」

/* eslint-disable react/jsx-handler-names */
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import type { Dispatch, SetStateAction, VFC } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  product?: {
    id: string;
    name: string;
    href: string;
    price: number;
    imageSrc: string;
    imageAlt: string;
  };
};

export const ProductDetail: VFC<Props> = (props) => {
  return (
    <Dialog open={props.isOpen} onClose={props.setIsOpen} className="overflow-y-auto fixed inset-0 z-50">
      <div className="flex justify-center items-center min-h-screen">
        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <div className="relative mx-auto max-w-sm bg-white rounded">
          <Dialog.Title>商品詳細</Dialog.Title>
          {/* <Dialog.Description>This will permanently deactivate your account</Dialog.Description> */}

          <div className="overflow-hidden flex-shrink-0 rounded-md border border-gray-200">
            {props.product && (
              <Image
                width={300}
                height={300}
                src={props.product.imageSrc}
                alt={props.product.imageAlt}
                className="object-cover object-center w-full"
              />
            )}

            <div className="flex flex-col flex-1 ml-4">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <div>{props.product?.name}</div>
                  </h3>
                  <p>Price</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
