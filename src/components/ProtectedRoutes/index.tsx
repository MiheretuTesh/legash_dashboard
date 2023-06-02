import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = (props: any) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to={"/login"} replace />;
  }
  return props.children ? props.children : <Outlet />;
};

export default ProtectedRoutes;
