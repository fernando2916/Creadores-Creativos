import { useEffect } from "react";

const Frecuentes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <h1>Preguntas Frecuentes</h1>
    </div>
  );
};

export default Frecuentes;
