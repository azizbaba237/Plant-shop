import React from "react";
import { Navigate } from "react-router-dom";
import { serviceSecure } from "../services/Secure";

function AuthGuard({ children }) {
  if (!serviceSecure.getToken()) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default AuthGuard;
