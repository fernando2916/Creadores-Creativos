import { useState } from "react";
import {
  FaCheck,
  FaClock,
  FaMinus,
  FaPlus,
  // FaQuestion,
  FaTimes,
} from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Sienna",
    inStock: true,
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    price: "$32.00",
    color: "Black",
    inStock: false,
    leadTime: "Disponible en 1- 2 semanas",
    size: "Large",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
  },
  //   {
  //     id: 3,
  //     name: "Nomad Tumbler",
  //     href: "#",
  //     price: "$35.00",
  //     color: "White",
  //     inStock: true,
  //     imageSrc:
  //       "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",
  //     imageAlt: "Insulated bottle with white base and black snap lid.",
  //   },
];

const Carrito = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Carrito de compras
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <section aria-labelledby="cart-heading" className="lg:col-span-7">
            <h2 id="cart-heading" className="sr-only">
              Artículos en su carrito de compras
            </h2>

            <ul
              role="list"
              className="border-t border-b border-gray-200 divide-y divide-gray-200">
              {products.map((product) => (
                <li key={product.id} className="flex py-6 sm:py-10">
                  <div className="flex-shrink-0">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
                    />
                  </div>

                  <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                      <div>
                        <div className="flex justify-between">
                          <h3 className="text-sm">
                            <a
                              href={product.href}
                              className="font-medium text-link-300">
                              {product.name}
                            </a>
                          </h3>
                        </div>
                        <div className="mt-1 flex text-sm">
                          <p className="">{product.color}</p>
                          {product.size ? (
                            <p className="ml-4 pl-4 border-l border-gray-200 ">
                              {product.size}
                            </p>
                          ) : null}
                        </div>
                        <p className="mt-1 text-sm font-medium">
                          {product.price}
                        </p>
                      </div>

                      <div className="mt-4 sm:mt-0 sm:pr-9">
                        <div className="flex gap-2">
                          <button
                            type="button"
                            className={`${count === 0 ? "hidden" : "text-xs"}`}
                            onClick={() => setCount((count) => count - 1)}>
                            <FaMinus />
                          </button>

                          <input
                            type="number"
                            className="text-lg outline-none rounded-md w-28 px-2 py-1 md:px-5 md:py-2 bg-transparent border-2 border-link-100 placeholder:text-white"
                            placeholder={count}
                          />

                          <button
                            type="button"
                            className=" text-xs"
                            onClick={() => setCount((count) => count + 1)}>
                            <FaPlus />
                          </button>
                        </div>
                        <div className="absolute top-0 right-0">
                          <button
                            type="button"
                            className="-m-2 p-2 inline-flex ">
                            <span className="sr-only">Remove</span>
                            <FaTimes className="h-5 w-5" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 flex  text-sm  space-x-2">
                      {product.inStock ? (
                        <FaCheck
                          className="flex-shrink-0 h-5 w-5 text-green-500"
                          aria-hidden="true"
                        />
                      ) : (
                        <FaClock
                          className="flex-shrink-0 h-5 w-5 "
                          aria-hidden="true"
                        />
                      )}

                      <span>
                        {product.inStock
                          ? "Disponible"
                          : `Agotado, ${product.leadTime}`}
                      </span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Order summary */}
          <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-nav-800 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5">
            <h2 id="summary-heading" className="text-lg font-medium ">
              Resumen de compra
            </h2>

            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm ">Producto</dt>
                <dd className="text-sm font-medium ">$99.00</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex items-center text-sm ">
                  <span>Envío</span>
                </dt>
                <dd className="text-sm font-medium ">$5.00</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex text-sm ">
                  <span>IVA 16%</span>
                </dt>
                <dd className="text-sm font-medium ">$8.32</dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="text-base font-medium ">Total</dt>
                <dd className="text-base font-medium ">$112.32</dd>
              </div>
            </dl>

            <div className="mt-6">
              <button
                type="button"
                className="w-full bg-btn-600 rounded-md shadow-sm py-3 px-4 text-base font-medium hover:bg-btn-400 duration-150 transition-colors">
                Continuar compra
              </button>
            </div>
          </section>
        </form>
      </div>
    </>
  );
};

export default Carrito;
