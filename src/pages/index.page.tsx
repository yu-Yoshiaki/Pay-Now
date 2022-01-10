import type { NextPage } from "next";
import Link from "next/link";
import { Card } from "src/layout/Card";
import { Footer } from "src/layout/Footer";
import { ServiceName } from "src/lib/serviceName";

//tech

const products = [
  {
    id: "H0001K",
    name: "Earthen Bottle",
    href: "#",
    price: 4800,
    image: {
      src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
      alt: "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    },
  },
  {
    id: "P0144B",
    name: "Nomad Tumbler",
    href: "#",
    price: 3500,
    image: {
      src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
      alt: "Olive drab green insulated bottle with flared screw lid and flat top.",
    },
  },
  {
    id: "G1569A",
    name: "Focus Paper Refill",
    href: "#",
    price: 8900,
    image: {
      src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
      alt: "Person using a pen to cross a task off a productivity paper card.",
    },
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: 3500,
    image: {
      src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
      alt: "Hand holding black machined steel mechanical pencil with brass tip and top.",
    },
  },
  {
    id: 5,
    name: "Focus Paper Refill",
    href: "#",
    price: 8900,
    image: {
      src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg",
      alt: "Person using a pen to cross a task off a productivity paper card.",
    },
  },
  {
    id: 6,
    name: "Focus Paper Refill",
    href: "#",
    price: 8900,
    image: {
      src: "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-06.jpg",
      alt: "Person using a pen to cross a task off a productivity paper card.",
    },
  },
];

const Home: NextPage = () => {
  return (
    <div>
      <header className="flex fixed right-0 left-0 z-20 justify-between items-center w-full h-20 bg-white border-b">
        <div className="flex items-center">
          <h1 className="p-5 text-left">
            <Link key={"/"} href={"/"}>
              <a className="flex flex-col md:flex-none">
                <span className="text-3xl font-bold">SHOP</span>{" "}
                <span className="text-lg font-bold"> by {ServiceName}</span>
              </a>
            </Link>{" "}
          </h1>
          <h2>レジの無いショッピングサイト</h2>
        </div>
      </header>
      <main className="pt-20 w-full bg-image-checkout">
        <div className="px-2 pb-5 w-full text-left text-white bg-gray-600 bg-opacity-50 md:px-16">
          <div className="grid grid-cols-1 gap-x-4 gap-y-10 justify-center sm:grid-cols-2 md:gap-x-6 md:py-8 md:px-[100px] lg:grid-cols-3">
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <Card name={product.name} price={product.price} image={product.image} />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
