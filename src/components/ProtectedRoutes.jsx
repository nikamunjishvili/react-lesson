import React from "react";
import SignIn from "./layouts/SignIn";

const ProtectedRoutes = ({ children }) => {
  const isLogedin = false;
  if (isLogedin) {
    return (
      <>
        <h1>This page is Protected!!</h1>
        {children}
      </>
    );
  }

  return <SignIn />;
};

export default ProtectedRoutes;
