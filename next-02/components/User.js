import { IconButton, ListItem, ListItemText } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit.js";
import DeleteIcon from "@mui/icons-material/Delete.js";
import { ContextUser } from "../pages/ContextUser";
import { useContext } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase";

const User = ({ id, name, phone, date, email }) => {
  const { setUser } = useContext(ContextUser);

  const deleteUser = async (id, e) => {
    e.stopPropagation();
    const documento = doc(db, "users", id);
    await deleteDoc(documento);
    alert(`User with ID: ${documento.id} has been deleted`);
  };

  return (
    <>
      <ListItem
        sx={{ mt: 3, boxShadow: 5 }}
        style={{ backgroundColor: "#2196f3", color: "#fff" }}
        secondaryAction={
          <>
            <IconButton
              onClick={() => setUser({ id, name, phone, date, email })}
            >
              <EditIcon />
            </IconButton>
            <IconButton onClick={(e) => deleteUser( id, e)}>
              <DeleteIcon />
            </IconButton>
          </>
        }
      >
        <ListItemText primary={name} secondary={email} />
        <ListItemText primary={phone} secondary={date} />
      </ListItem>
    </>
  );
};

export default User;
