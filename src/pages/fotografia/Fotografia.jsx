import { useEffect } from "react";
import { Header } from "./Header";
import { InfoFoto } from "./InfoFoto";
import { TiposFoto } from "./TiposFoto";
import { ImageCorp } from "./ImageCorp";
import { Plans } from "./Plans";
import { Portafoilio } from "./Portafoilio";
import { Testimonios } from "./Testimonios";
const Fotografia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <InfoFoto />
      <TiposFoto />
      <ImageCorp />
      <Plans />
      <Portafoilio />
      <Testimonios />
    </>
  );
};

export default Fotografia;
