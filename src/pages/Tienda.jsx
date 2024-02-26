import { useEffect } from "react";

const Tienda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-[4rem]">
      <h1>Tienda</h1>
    </div>
  );
};

export default Tienda;
