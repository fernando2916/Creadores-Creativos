import { Link } from "react-router-dom";
import Logo from "../../../assets/emprende horizontal blanco.png";

export const AuthSection = ({ title, children, className }) => {
  return (
    <>
      <div className="flex flex-col justify-center sm:px-4 lg:px-8 py-[5rem]">
        {/* <div className="md:p-10"></div> */}
        <div className="sm:mx-auto sm:w-full sm:max-w-md mt-5">
          <Link to="/">
            <img className="mx-auto h-12 w-auto " src={Logo} alt="compañia" />
          </Link>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md p-2">
          <div
            className={` bg-nav-900 py-8 px-4 rounded-xl sm:px-10 ${className}`}>
            <h2 className="text-center p-3 mb-5 text-3xl font-bold">{title}</h2>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
