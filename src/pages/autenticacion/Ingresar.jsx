import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthSection } from "./components/AuthSection";
import { FaLock, FaLockOpen, FaUser } from "react-icons/fa";
import { useAuthStore } from "../../hooks";
import Swal from "sweetalert2";
import { Oval } from "react-loader-spinner";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const loginFormFields = {
  email: "",
  password: "",
};

const Ingresar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const dispatch = useDispatch()
  const Navigate = useNavigate()

  const [showPassword, setShowPassword] = useState(false);

  const { startLogin, errorMessage, message, status, loading } =
    useAuthStore();

  const loginSubmit = (values) => {
    dispatch(startLogin({
      email: values.email,
      password: values.password,
    }));
  };

  const loginSchema = Yup.object({
    email: Yup.string()
      .email("El correo no es válido")
      .required("El email es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
  });

  useEffect(() => {
    if(message !== null){
      Swal.fire({
        title: 'Bienvenido', 
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
    if (status === "Authenticated") {
       Navigate('/');
    }
  }, [status])
  


  return (
    <AuthSection title="Ingresa a tu cuenta">
      <Formik
        initialValues={loginFormFields}
        onSubmit={loginSubmit}
        validationSchema={loginSchema}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
        }) => (
          <form className="pt-3 space-y-5" noValidate onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-2">
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
            <div className=" flex flex-col space-y-2">
              <label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">Contraseña</label>
              <div className="relative">
                <input
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
                  type="button"
                  className="absolute right-3 top-3 text-xl outline-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaLockOpen /> : <FaLock />}
                </button>
              </div>
              <p className="text-sm text-red-400 font-semibold">
                {errors.password}
              </p>
            </div>

            <div className="flex justify-between items-center mt-5">
              <div className=" flex items-center gap-1">
                <input type="checkbox" className="w-4 h-4 accent-btn-200" />
                <p id="recordar">Recordarme</p>
              </div>
              <Link
                to="/auth/restablecer-contraseña"
                className="text-sm text-link-100"
              >
                ¿Olvidaste tu Contraseña?
              </Link>
            </div>
            <div>
              {loading ? (
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-600 gap-2 items-center"
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
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-lg font-bold text-white bg-btn-400 hover:bg-btn-600 transition-all ease-in gap-2 items-center"
                >
                  <FaUser />
                  Entrar a mi cuenta
                </button>
              )}
            </div>
            <div className=" border-t border-gray-500">
              <p className="text-center mt-5 mb-3">
                ¿No tienes una cuenta?{" "}
                <button type="button" className="text-link-100 font-bold">
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

export default Ingresar;
