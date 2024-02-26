import { useEffect } from "react";

const Terminos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <h1>Terminos y condiciones</h1>
    </div>
  );
};

export default Terminos;
