import { useEffect } from "react";
import { Header } from "./Header";
import { InfoFoto } from "./InfoFoto";
import { TiposFoto } from "./TiposFoto";
import { ImageCorp } from "./ImageCorp";
import { Portafoilio } from "./Portafoilio";
import { Testimonios } from "./Testimonios";
import { BannerContact } from "./BannerContact";
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
      <BannerContact />
      <Portafoilio />
      <Testimonios />
    </>
  );
};

export default Fotografia;
