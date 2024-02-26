import { useEffect } from "react";

const PoliticaComp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <h1>Politica de compras</h1>
    </div>
  );
};

export default PoliticaComp;
