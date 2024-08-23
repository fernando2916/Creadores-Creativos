import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FaLock, FaLockOpen, FaSignInAlt } from "react-icons/fa";

import { TerminosModal, PoliticasModal } from "./modales";
import Swal from "sweetalert2";
import { useAuthStore } from "@/hooks";
import { AuthSection } from "./components/AuthSection";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
import { Oval } from "react-loader-spinner";

const registerFormFields = {
  name: "",
  last_name: "",
  email: "",
  password: "",
  password2: "",
};

const Registro = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const Navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const { startRegister, errorMessage, message, loading, status } =
    useAuthStore();
  const dispatch = useDispatch();

  const registerSubmit = (values) => {
    dispatch(
      startRegister({
        name: values.name,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
        password_confirmation: values.password2,
      })
    );
  };

  const registerSchema = Yup.object({
    name: Yup.string()
      .min(3, "El nombre es muy corto")
      .max(10, "El nombre es muy largo")
      .required("El nombre es obligatorio"),
    lastName: Yup.string()
      .min(3, "El apellido es muy corto")
      .max(15, "El apellido es muy largo")
      .required("El apellido es obligatorio"),
    email: Yup.string()
      .email("El correo no es válido")
      .required("El email es obligatorio"),
    password: Yup.string()
      .min(
        8,
        "La contraseña debe tener al menos 8 caracteres, un símbolo y un numero"
      )
      .matches(/[0-9]/, "la contraseña debe tener al menos un número")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "la contraseña debe tener al menos un símbolo"
      )
      .required("La contraseña es obligatoria"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "La contraseña no coincide")
      .required("La confirmación de la contraseña es obligatoria"),
  });

  useEffect(() => {
    if (message !== null) {
      Swal.fire({
        title: "Registro Éxitoso",
        html: message,
        icon: "success",
        timer: 5000,
        background: "#120024",
        color: "#fff",
        iconColor: "#1EE618",
      });
    }
  }, [message]);

  useEffect(() => {
    if (status === "Registrado") {
      Navigate('/auth/activacion-en-espera');
   }
  }, [status])
  


  return (
    <AuthSection title="Crear tu Cuenta">
      <Formik
        initialValues={registerFormFields}
        onSubmit={registerSubmit}
        validationSchema={registerSchema}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form
            className="pt-3 space-y-3 flex flex-col"
            noValidate
            onSubmit={handleSubmit}
          >
            <div className=" flex flex-col space-y-2">
              <label
                className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                id="nombre"
                type="text"
                placeholder="Ingresa tu Nombre "
                className={
                  errors.name
                    ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                    : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                }
                name="name"
                value={values.name}
                onChange={handleChange}
                error={errors.name}
              />
              <p className="text-sm text-red-400 font-semibold">
                {errors.name}
              </p>
            </div>
            <div className=" flex flex-col space-y-2">
              <label
                className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="apellido"
              >
                Apellido
              </label>
              <input
                id="apellido"
                type="text"
                placeholder="Ingresa tu apellido "
                className={
                  errors.lastName
                    ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                    : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                }
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                error={errors.lastName}
              />
              <p className="text-sm text-red-400 font-semibold">
                {errors.lastName}
              </p>
            </div>
            <div className=" flex flex-col space-y-2">
              <label
                className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="correo"
              >
                Correo Electrónico
              </label>
              <input
                id="correo"
                type="email"
                placeholder="Ingresa tu Correo Electrónico"
                className={
                  errorMessage?.email || errors.email
                    ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500"
                    : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
                }
                name="email"
                value={values.email}
                onChange={handleChange}
                error={errors.email}
              />
              <p className="text-sm text-red-400 font-semibold">
                {errorMessage?.email}
                {errors.email}
              </p>
            </div>
            <div className=" flex flex-col space-y-2">
              <label
                className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="contraseña"
              >
                Contraseña
              </label>
              <div className="relative">
                <input
                  id="contraseña"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingresa una contraseña"
                  className={
                    errors.password
                      ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 w-full"
                      : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
                  }
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  error={errors.password}
                />
                <button
                  className="absolute right-3 top-3 text-xl outline-none"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaLockOpen /> : <FaLock />}
                </button>
                <p className="text-sm text-red-400 font-semibold">
                  {errors.password}
                </p>
              </div>
            </div>
            <div className=" flex flex-col space-y-2">
              <label
                className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500"
                htmlFor="confirmar contraseña"
              >
                Confirmar Contraseña
              </label>
              <div className="relative">
                <input
                  id="confirmar contraseña"
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Repite la contraseña"
                  className={
                    errors.password2
                      ? "bg-transparent p-2 rounded-md border-alerts-500 border-2 outline-none focus:shadow-md focus:shadow-alerts-500 w-full"
                      : "bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 w-full"
                  }
                  name="password2"
                  value={values.password2}
                  onChange={handleChange}
                  error={errors.password2}
                />
                <button
                  className="absolute right-3 top-3 text-xl outline-none"
                  type="button"
                  onClick={() => setShowPassword2(!showPassword2)}
                >
                  {showPassword2 ? <FaLockOpen /> : <FaLock />}
                </button>
                <p className="text-sm text-red-400 font-semibold">
                  {errors.password2}
                </p>
              </div>
            </div>
            <div>
              <p className=" text-[12px] py-4">
                Al hacer click en Crear cuenta, indicas que leíste y reconoces
                los <TerminosModal />
                y el
                <PoliticasModal />
                de Emprendedores Creativos.
              </p>
            </div>
            <div>
              {loading ? (
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-600 gap-2 items-cente"
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
                  className="w-full flex items-center justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-400 hover:bg-btn-600 transition-all ease-in gap-2 items-cente"
                >
                  <FaSignInAlt />
                  Crear Cuenta
                </button>
              )}
            </div>
            <div>
              <p className="text-center mt-5 mb-3">
                ¿Ya tienes una cuenta?{" "}
                <button className="text-link-100 font-bold">
                  <Link to="/auth/ingresar">Entrar a mi cuenta</Link>
                </button>
              </p>
            </div>
          </form>
        )}
      </Formik>
    </AuthSection>
  );
};

export default Registro;
