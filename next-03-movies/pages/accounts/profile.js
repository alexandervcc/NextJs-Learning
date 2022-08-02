import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useState } from "react";

const profile = () => {
  return (
    <Layout title="My Profile">
      <ToastContainer theme="colored" />
      <h1 className="text-center">My Profile</h1>
    </Layout>
  );
};

export default profile;
