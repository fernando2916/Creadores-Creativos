import { useEffect } from "react";
import { AuthSection } from "./components/AuthSection";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useAuthStore } from "@/hooks";
import Swal from "sweetalert2";
import { Oval } from "react-loader-spinner";

const resetCodeEmail = {
  email: "",
};

const RecuperarContraseña = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const distpatch = useDispatch();
  const { reset_password, errorMessage, message, loading } = useAuthStore();

  const resetSubmit = (values) => {
    distpatch(
      reset_password({
        email: values.email,
      })
    );
  };

  const codeEmailSchema = Yup.object({
    email: Yup.string()
      .email("El correo no es válido")
      .required("El email es obligatorio"),
  });

  useEffect(() => {
    if (message !== null) {
      Swal.fire({
        title: "Correo enviado",
        html: message,
        icon: "success",
        timer: 5000,
        background: "#120024",
        color: "#fff",
        iconColor: '#1EE618'
      });
    }
  }, [message]);

  useEffect(() => {
    if (errorMessage !== null) {
      Swal.fire({
        title: "Oops",
        html: errorMessage,
        icon: "error",
        timer: 5000,
        background: "#120024",
        color: "#fff",
        iconColor: '#EB0000'
      });
    }
  }, [errorMessage]);



  return (
    <AuthSection title={"Restablece tu Contraseña"}>
      <p className="mx-auto text-justify text-sm">
        Ingresa el correo electrónico con el que te regístraste, te enviaremos
        las instrucciones para actualizar tu contraseña.
      </p>
      <Formik
        validationSchema={codeEmailSchema}
        initialValues={resetCodeEmail}
        onSubmit={resetSubmit}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form className="pt-3 space-y-4" onSubmit={handleSubmit}>
            <div className=" flex flex-col space-y-2">
              <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">
                Correo Electrónico
              </label>
              <input
                type="email"
                placeholder="Ingresa tu Correo Electrónico"
                className={
                  errors.email || errorMessage?.message
                    ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                    : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                }
                name="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
              <p className="text-sm text-red-400 font-semibold">
                {errorMessage?.message}
                {errors.email}
              </p>
            </div>
            {loading ? (
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-base font-bold bg-btn-600 gap-2 items-center"
              >
                <Oval
                  visible={true}
                  height="30"
                  strokeWidth={4}
                  width="30"
                  color="#fff"
                  secondaryColor="#6e004c"
                  ariaLabel="oval-loading"
                />
              </button>
            ) : (
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-base font-bold bg-btn-600 gap-2 items-center"
              >
                <FaEnvelope />
                Restablecer contraseña
              </button>
            )}

            <div className="">
              <p className="text-center mt-5 mb-3">
                ¿Aún no tienes cuenta?{" "}
                <button className="text-link-100 font-bold">
                  <Link to="/auth/crear-cuenta">Crear cuenta</Link>
                </button>
              </p>
            </div>
          </form>
        )}
      </Formik>
    </AuthSection>
  );
};

export default RecuperarContraseña;
