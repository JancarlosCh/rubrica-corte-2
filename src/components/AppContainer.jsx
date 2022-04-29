import React, { useEffect, useRef, useState } from "react";
import RegistrationForm from "./RegistrationForm";
import UserList from "./UserList";

const initialState = () => {
  const data = localStorage.getItem("data");
  return data ? JSON.parse(data) : [];
};

const AppContainer = () => {
  const [users, setUsers] = useState(initialState);
  const [userData, setUserData] = useState();
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(users));
  }, [users]);

  return (
    <div className="container mt-5 d-flex">
      <RegistrationForm
        users={users}
        setUsers={setUsers}
        userData={userData}
        setUserData={setUserData}
        deleted={deleted}
      />
      {users.length > 0 && (
        <UserList
          users={users}
          setUsers={setUsers}
          deleted={deleted}
          setDeleted={setDeleted}
        />
      )}
    </div>
  );
};

export default AppContainer;
