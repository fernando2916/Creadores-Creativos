import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthSection } from "./components/AuthSection";

import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useAuthStore } from "@/hooks";
import Swal from "sweetalert2";



const ActivarCuenta = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { verify, message, errorMessage, status } = useAuthStore();
  const params = useParams()
  const [verification_code, setVerification_Code] = useState('')
  const id = params.id
  const Navigate = useNavigate()

  const handleChange = (verification_code) => {
     setVerification_Code(verification_code)
  }

  const handleComplete = (verification_code) => {
     verify({
       id,
       verification_code
     });
  };

  useEffect(() => {
    if(message !== null){
      Swal.fire({
        title: 'Activación Correcta', 
        html: message, 
        icon: 'success', 
        timer: 5000,
        background: '#120024',
        color: '#fff',
        iconColor: '#1EE618'

      } )
    }
  }, [message])

  useEffect(() => {
    if(errorMessage !== null){
      Swal.fire({
        title: 'Activación Fallida', 
        html: errorMessage, 
        icon: 'error', 
        timer: 5000,
        background: '#120024',
        color: '#fff',
        iconColor: '#EB0000',
      } )
    }
  }, [errorMessage])

  
  useEffect(() => {
    if (status === "Activada") {
      Navigate('/auth/ingresar');
   }
  }, [status])
  
    

  

  return (
    <AuthSection title="Activar cuenta" className="mt-10">
      <div className="text-center space-x-2">
        <form>
          <div className="flex justify-center items-center gap-5">
            <PinInput size='lg' name='verification_code' value={verification_code} onChange={handleChange} onComplete={handleComplete}>
              <PinInputField className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2  outline-none placeholder:text-[#120024]"/>
              <PinInputField className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2 outline-none placeholder:text-[#120024]"/>
              <PinInputField className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2 outline-none placeholder:text-[#120024]"/>
              <PinInputField className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2 outline-none placeholder:text-[#120024]"/>
              <PinInputField className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2 outline-none placeholder:text-[#120024]"/>
              <PinInputField className="w-10 h-10 rounded-md border border-link-200 items-center bg-transparent p-[14px] pt-[12px] text-lg focus:border-link-100 focus:border-2 outline-none placeholder:text-[#120024]"/>
            </PinInput>
          </div>
        </form>
      </div>
      <Link to='auth/resetear-codigo'>
      <button
        className="flex gap-2 font-semibold text-xl items-center mx-auto bg-btn-400 p-2 hover:bg-btn-600 transition-colors rounded-md mt-10"
        type="submit"
        >
        Solicitar nuevo código
      </button>
        </Link>
    </AuthSection>
  );
};

export default ActivarCuenta;
