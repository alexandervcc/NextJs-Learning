import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import moment from "moment";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import User from "./User";

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const collect = collection(db, "users");
    const quer = query(collect, orderBy("date", "desc"));

    const unsubscribe = onSnapshot(quer, (querySnapShot) => {
      setUsers(
        querySnapShot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          date2: moment(doc.data().date?.toDate().getTime()).format(
            "MMMM dd, yyyy"
          ),
        }))
      );
    });

    return unsubscribe;
  }, []);

  return (
    <div>
      <h2> ListUsers</h2>
      {users.map((user) => (
        <User
          key={user.id}
          name={user.name}
          id={user.id}
          phone={user.phone}
          email={user.email}
          date={user.date2}
        />
      ))}
    </div>
  );
};

export default ListUsers;
