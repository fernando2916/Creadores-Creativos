import { useEffect } from "react";
import { HeaderPriv } from "./components/privacidad/HeaderPriv";
import { ManageYourPersonal } from "./components/privacidad/ManageYourPersonal";
import { SetYourPreferences } from "./components/privacidad/SetYourPreferences";
import { CookiesContainer } from "./components/privacidad/CookiesContainer";
import { ProcessedData } from "./components/privacidad/ProcessedData";
import { Faqs } from "./components/privacidad/Faqs";
import { ProtectedYourData } from "./components/privacidad/ProtectedYourData";

const PoliticaPriv = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="pt-[4rem]">
      <HeaderPriv />
      <ManageYourPersonal />
      <SetYourPreferences />
      <CookiesContainer />
      <ProcessedData />
      <Faqs />
      <ProtectedYourData/>
    </main>
  );
};

export default PoliticaPriv;
