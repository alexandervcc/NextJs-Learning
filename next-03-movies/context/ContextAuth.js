import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "../config/index";

const ContextAuthorization = createContext();

export const ProvideAuthorization = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const signUp = async (user) => {
    console.log("Carga registro: ",user);
  };

  const logIn = async ({ email: identifier, password }) => {
    console.log("Carga acceso for: ",identifier," with ",password);
  };

  const logOut = async () => {
    console.log("Carga salir ");
  };

  const validateAuthenticatedUser = async (user) => {
    console.log("Carga validar user");
  };

  return (
    <ContextAuthorization.Provider
      value={{ user, error, signUp, logIn, logOut, validateAuthenticatedUser }}
    >
      {children}
    </ContextAuthorization.Provider>
  );
};


export default ContextAuthorization;