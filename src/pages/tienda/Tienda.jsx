import { useEffect } from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";

const Tienda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <Header />
      <div className="grid grid-cols-12 max-w-[115rem] lg:mx-auto my-10 gap-5">
        <div className="col-span-full p-4 lg:p-8 rounded-lg">
      <Products/>

        </div>
      </div>
    </div>
  );
};

export default Tienda;
