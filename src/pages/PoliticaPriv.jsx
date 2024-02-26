import { useEffect } from "react";

const PoliticaPriv = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <h1>Politica de privacidad</h1>
    </div>
  );
};

export default PoliticaPriv;
