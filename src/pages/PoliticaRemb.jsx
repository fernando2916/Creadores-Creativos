import { useEffect } from "react";

const PoliticaRemb = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <h1>Politica de rembolso</h1>
    </div>
  );
};

export default PoliticaRemb;
