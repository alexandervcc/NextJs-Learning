import { Button, TextField } from "@mui/material";
import {
  addDoc,
  collection,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useContext, useEffect, useRef } from "react";
import { db } from "../firebase";
import { ContextUser } from "../pages/ContextUser";

const UserForm = () => {
  const { user, setUser } = useContext(ContextUser);

  const inputUserForm = useRef();

  const onSubmit = async () => {
    //Validar si es edicion o creacion
    if (user?.hasOwnProperty("date")) {
      const documento = doc(db, "users", user.id);
      const userUpdated = { ...user, date: serverTimestamp() };
      updateDoc(documento, userUpdated);
      alert(`User Updated with ID: ${documento.id}`);
    } else {
      const docCollection = collection(db, "users");
      const documento = await addDoc(docCollection, {
        ...user,
        date: serverTimestamp(),
      });
      alert(`User Created with ID: ${documento.id}`);
    }

    setUser({ name: "", email: "", phone: "" });
  };

  useEffect(() => {
    const validateOutClick = (e) => {
      if (!inputUserForm.current.contains(e.target)) {
        setUser({ name: "", email: "", phone: "" });
      }
    };
    document.addEventListener("mousedown", validateOutClick);

    return () => {
      document.removeEventListener("mousedown", validateOutClick);
    };
  }, []);

  return (
    <div ref={inputUserForm}>
      <TextField
        fullWidth
        label="name"
        margin="normal"
        value={user.name}
        onChange={(e) => {
          setUser({ ...user, name: e.target.value });
        }}
      />
      <TextField
        fullWidth
        type="number"
        label="phone"
        margin="normal"
        value={user.phone}
        onChange={(e) => {
          setUser({ ...user, phone: e.target.value });
        }}
      />
      <TextField
        fullWidth
        label="email"
        type="email"
        margin="normal"
        value={user.email}
        onChange={(e) => {
          setUser({ ...user, email: e.target.value });
        }}
      />

      <Button
        fullWidth
        variant="contained"
        color="secondary"
        mx={{ mt: 3 }}
        onClick={onSubmit}
      >
        {!user.hasOwnProperty("date") ? "Create User" : "Update User"}
      </Button>
    </div>
  );
};

export default UserForm;
