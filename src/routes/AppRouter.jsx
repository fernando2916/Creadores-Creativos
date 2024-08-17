
import {  Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

function AppRouter() {

  const status = 'Authenticated'


  if (status === 'checking') {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }

  return (
    <Routes>
          <Route path="/*" element={<PublicRoutes />} />
          <Route path="/*" element={<PrivateRoutes />} />
      {/* {(status === 'Authenticated') ? (
      // ) : (
      // ) 
      // } */}
    </Routes>
  );
}

export default AppRouter;
