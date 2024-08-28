import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { useAuthStore } from "@/hooks";
import { useEffect } from "react";

function AppRouter() {
  const { status, refresh_token } = useAuthStore();

  useEffect(() => {
    refresh_token();
  }, []);

  return (
    <Routes>
      {/* {(status === "Authenticated") ? ( */}
        <>
          <Route path="/*" element={<PrivateRoutes />} />
        </>
        {/* // ) : ( */}
          <Route path="/*" element={<PublicRoutes />} />
       {/* )} */}
    </Routes>
  );
}

export default AppRouter;
