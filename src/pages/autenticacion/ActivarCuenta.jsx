import { useEffect } from "react";
import { AuthSection } from "./components/AuthSection";
import { PinInput, PinInputField } from "@chakra-ui/react";

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
    <AuthSection title="Activar cuenta" className='mt-10'>
      <div className="text-center space-x-2">
        
      <PinInput variant='unstyled' type="number">
        <PinInputField className="border border-link-100 placeholder:sr-only"/>
        <PinInputField className="border border-link-100 placeholder:sr-only"/>
        <PinInputField className="border border-link-100 placeholder:sr-only"/>
        <PinInputField className="border border-link-100 placeholder:sr-only"/>
        <PinInputField className="border border-link-100 placeholder:sr-only"/>
        <PinInputField className="border border-link-100 placeholder:sr-only"/>

        
      </PinInput>
      </div>
      {/* <button
        // onClick={activate_account}
        className="flex gap-2 font-semibold text-xl items-center mx-auto mt-4 bg-btn-400 p-2 hover:bg-btn-600 transition-colors rounded-md"
        type="submit">
        Activar
      </button> */}
    </AuthSection>
  );
};

export default ActivarCuenta;
