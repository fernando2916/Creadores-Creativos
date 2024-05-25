import { useEffect } from "react";
import { Header } from "./Header";
const Impresion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
    </>
  );
};

export default Impresion;
