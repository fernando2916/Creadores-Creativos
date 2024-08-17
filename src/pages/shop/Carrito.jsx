import { useEffect } from "react";
import { ItemProduct } from "./components/ItemProduct";
import { OrderSummary } from "./components/OrderSummary";



const Carrito = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="mx-auto pt-28 pb-24 px-4 sm:px-6 max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Carrito de compras
        </h1>
        <form className="mt-12 grid grid-cols-12 gap-10 lg:gap-x-12 lg:items-start xl:gap-x-16 relative">
            <ItemProduct/>
          

          {/* Order summary */}
            <OrderSummary/>
        </form>
      </div>
    </>
  );
};

export default Carrito;
