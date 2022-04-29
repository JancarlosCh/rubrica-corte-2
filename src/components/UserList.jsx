import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ListElement from "./ListElement";

const UserList = ({ users, setUsers, deleted, setDeleted }) => {
  const handleDelete = (id) => {
    const data = users.filter((user) => user.id !== id);
    setUsers(data);

    setDeleted(true);

    setTimeout(() => {
      setDeleted(false);
    }, 3000);
  };

  return (
    <div className="container w-50">
      <ul className="list-group">
        {users.map((user) => {
          return (
            <ListElement
              key={user.id}
              user={user}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

UserList.propTypes = {
  users: PropTypes.array,
  delete: PropTypes.func,
};

export default UserList;
