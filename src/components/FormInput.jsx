import React, { useEffect, useRef, useState } from "react";

const FormInput = ({
  classname,
  name,
  id,
  type,
  inputRef,
  label,
  userData,
  setUserData,
  inputError,
  errors,
  setErrors,
}) => {
  const [error, setError] = useState(inputError);

  const handleChange = (event) => {
    if (event.target.value === "") {
      event.target.classList.remove("is-valid");
      event.target.classList.add("is-invalid");
      setError(true);
    } else {
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
      setError(false);

      setUserData({
        ...userData,
        [event.target.name]: event.target.value,
      });
    }
  };

  useEffect(() => {
    setErrors({
      ...errors,
      [inputRef.current.name]: error,
    });
  }, [error]);

  classname = !classname ? "form-floating" : `form-floating ${classname}`;

  return (
    <div className={classname}>
      <input
        ref={inputRef}
        className="form-control"
        name={name}
        id={id}
        type={type}
        placeholder={label}
        onChange={handleChange}
      />
      <label htmlFor={name}>{label}</label>
      {error && (
        <div className="invalid-feedback">
          {`Debes ingresar tu ${label.toLowerCase()}.`}
        </div>
      )}
    </div>
  );
};

export default FormInput;
