import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useContext, useState } from "react";
import ContextAuth from "../../context/ContextAuth";

const login = () => {
  const { logIn, error } = useContext(ContextAuth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = async (e) => {
    e.preventDefault();
    logIn({ email, password });
  };

  return (
    <Layout title="Log-In User">
      <ToastContainer theme="colored" />
      <div className="card my-2">
        <div className="card-header">
          <h1 className="text-center">Log-In </h1>
        </div>
        <div className="card-body">
          <form className="" onSubmit={handleLogIn}>
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
            <button type="submit" className="btn btn-primary mt-2 w-100">
              <i className="bi bi-person-circle"></i> Log In
            </button>
          </form>
        </div>
        <div className="card-footer">
          <p>
            Aun no tienes cuenta?
            <Link href="/accounts/signup"> Sign-Up</Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default login;
