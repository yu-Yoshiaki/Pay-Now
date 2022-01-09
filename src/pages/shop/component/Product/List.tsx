/* eslint-disable no-console */
/* eslint-disable react/jsx-handler-names */
import Image from "next/image";
import type { VFC } from "react";
// import { useCallback } from "react";
import { useState } from "react";

import { Cart } from "../Cart";
// import { useHasPurchased } from "src/hooks/useHasPurchased";
// import { useGetStripeMaterials } from "src/hooks/useGetStripeMaterials";
// import { MaterialsList } from "./MaterialsList";
import { Checkout } from "../Checkout";
import { ProductDetail } from "./Detail";

// type Props = {
//   time: number;
//   handleAddinCart: (id: string) => void;
// };

const products = [
  {
    id: "H0001K",
    name: "Earthen Bottle",
    href: "#",
    price: 4800,
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: "P0144B",
    name: "Nomad Tumbler",
    href: "#",
    price: 3500,
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt: "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: "G1569A",
    name: "Focus Paper Refill",
    href: "#",
    price: 8900,
    imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  },
  // {
  //   id: 4,
  //   name: "Machined Mechanical Pencil",
  //   href: "#",
  //   price: "$35",
  //   imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
  //   imageAlt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
  // },
  // {
  //   id: 5,
  //   name: "Focus Paper Refill",
  //   href: "#",
  //   price: "$89",
  //   imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
  //   imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  // },
  // {
  //   id: 6,
  //   name: "Focus Paper Refill",
  //   href: "#",
  //   price: "$89",
  //   imageSrc: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
  //   imageAlt: "Person using a pen to cross a task off a productivity paper card.",
  // },
  // More products...
];

export const ProductList: VFC = () => {
  // const { data: materials, isError, isLoading } = useGetStripeMaterials();
  // if (isError) return <div>error</div>;
  // if (isLoading) return <div>Loding...</div>;
  // if (materials === undefined) return <div>Data isNothing...</div>;
  // const user = auth.currentUser;

  // const handleClick = (id, image) => {
  //   props.handleAddinCart(id, image);
  //   setHasPurchased(true);
  // };

  const [isOpenProductDetail, setIsOpenProductDetail] = useState(false);

  type Item = {
    id: string;
    name: string;
    href: string;
    price: number;
    imageSrc: string;
    imageAlt: string;
  };

  const [item, setItem] = useState<Item>();

  const handleOpen = (e: Item) => {
    setItem(e);
    setIsOpenProductDetail(true);
  };

  return (
    <div className="bg-white">
      <div className="py-6 mx-auto max-w-2xl sm:py-6 sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            return (
              <div key={product.id} className="relative">
                <button
                  onClick={() => {
                    return handleOpen(product);
                  }}
                >
                  <div className="overflow-hidden w-full bg-gray-200 rounded-lg ">
                    <Image
                      width={450}
                      height={500}
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-cover object-center w-full h-full group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="overflow-hidden mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </button>
                <Checkout productid={product.id} price={product.price} />
              </div>
            );
          })}
        </div>
        <Cart />
        <ProductDetail isOpen={isOpenProductDetail} setIsOpen={setIsOpenProductDetail} product={item} />
      </div>
    </div>
  );
};
