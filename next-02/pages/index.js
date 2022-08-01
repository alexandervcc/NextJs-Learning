import { useState } from "react";
import ListUsers from "../components/ListUsers";
import UserForm from "../components/UserForm";
import {ContextUser} from "./ContextUser";

export default function Home() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
  });
  return (
    <ContextUser.Provider value={{user, setUser}}>
      <UserForm />
      <ListUsers />
    </ContextUser.Provider>
  );
}
