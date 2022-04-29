import React from "react";
import PropTypes from "prop-types";

const ListElement = ({ user, handleDelete }) => {
  return (
    <>
      <li className="list-group-item d-flex flex-wrap justify-content-around">
        <div className="flex-grow-1">
          <p className="text-center pt-2 mt-1">
            {`${user.id}, ${user.first_name} ${user.last_name}, ${user.age} años, ${user.educational_level}, ${user.email}`}
          </p>
        </div>
        <div className="mt-2">
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(user.id)}
          >
            Eliminar
          </button>
        </div>
      </li>
    </>
  );
};

ListElement.propTypes = {
  user: PropTypes.shape({}),
  handleDelete: PropTypes.func,
};

export default ListElement;
