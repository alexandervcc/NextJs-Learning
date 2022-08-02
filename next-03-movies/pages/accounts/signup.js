import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/ContextAuth";

const signup = () => {
  const { signUp,error } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  useEffect(() => {
    error ? toast.error(error) : null;
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirmation) {
      toast.error("Passwords doesnt match");
      return;
    }
    signUp({ username, email, password });
  };

  return (
    <Layout title="Sign-Up User">
      <ToastContainer theme="colored" />
      <div className="card my-2">
        <div className="card-header">
          <h1 className="text-center">Sign-Up </h1>
        </div>
        <div className="card-body">
          <form className="" onSubmit={handleSignUp}>
            <div>
              <label htmlFor="username">User: </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="Add username"
              ></input>
            </div>
            <div>
              <label htmlFor="email">Email </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Add email"
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="Password"
              ></input>
            </div>
            <div>
              <label htmlFor="password-confirm">Confirm Password </label>
              <input
                type="password"
                className="form-control"
                id="password-confirm"
                value={passwordConfirmation}
                onChange={(e) => {
                  setPasswordConfirmation(e.target.value);
                }}
                placeholder="Confirm Password"
              ></input>
            </div>

            <button type="submit" className="btn btn-success mt-2 w-100">
              <i className="bi bi-person-circle"></i> Sign Up
            </button>
          </form>
        </div>
        <div className="card-footer">
          <p>
            Ya tienes cuenta?
            <Link href="/accounts/login"> Log-In</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default signup;
