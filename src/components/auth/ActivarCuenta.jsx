import { useEffect } from "react";
import { AuthSection } from "../ui/AuthSection";

const ActivarCuenta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //   const activate_account = () => {
  //     // const uid = params.uid;
  //     // const token = params.token;
  //     activate({ uid: params.uid, token: params.token });
  //   };

  return (
    <AuthSection title="Activar cuenta">
      <button
        // onClick={activate_account}
        className="flex gap-2 font-semibold text-xl items-center mx-auto mt-4 bg-btn-950 p-2 hover:bg-btn-900 transition-all rounded-md"
        type="submit">
        Activar
      </button>
    </AuthSection>
  );
};

export default ActivarCuenta;
