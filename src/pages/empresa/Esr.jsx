import { useEffect } from "react";

const Esr = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <h1>Responsabilidad Social</h1>
    </div>
  );
};

export default Esr;
