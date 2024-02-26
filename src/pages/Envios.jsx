import { useEffect } from "react";

const Envios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <h1>Envios</h1>
    </div>
  );
};

export default Envios;
