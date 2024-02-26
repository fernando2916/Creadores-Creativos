import { useEffect } from "react";

const Facturacion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <h1>Facturación</h1>
    </div>
  );
};

export default Facturacion;
