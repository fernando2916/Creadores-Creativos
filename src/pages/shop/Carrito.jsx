import { ItemProduct } from "./components/ItemProduct";
import { OrderSummary } from "./components/OrderSummary";



const Carrito = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto pt-28 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Carrito de compras
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
            <ItemProduct/>
          

          {/* Order summary */}
         <OrderSummary/>
        </form>
      </div>
    </>
  );
};

export default Carrito;
