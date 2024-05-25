import { useEffect } from "react";

const Empresa = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <h1>Sobre Nosotros</h1>
    </div>
  );
};

export default Empresa;
