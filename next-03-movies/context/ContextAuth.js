import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NEXT_URL } from "../config/index";

const ContextAuthorization = createContext();

export const ProvideAuthorization = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const router = useRouter();
  useEffect(() => {
    validateAuthenticatedUser();
  }, []);

  const signUp = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      router.push("/accounts/profile");
    } else {
      setError(data.message.message);
    }
  };

  const logIn = async ({ email: identifier, password }) => {
    const res = await fetch(`${NEXT_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ identifier, password }),
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
      router.push("/accounts/profile");
    } else {
      setError(data.message.message);
    }
  };

  const logOut = async () => {
    const res = await fetch(`${NEXT_URL}/api/logout`, {
      method: "POST",
    });
    const data = await res.json();
    if (res.ok) {
      setUser(null);
      router.push("/");
    } else {
      setError(data.message.message);
    }
  };

  const validateAuthenticatedUser = async (user) => {
    const res = await fetch(`${NEXT_URL}/api/user`);
    const data = await res.json();
    if (res.ok) {
      setUser(data.user);
    } else {
      setUser(null);
    }
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
