import React, { useEffect, useRef, useState } from "react";

const SelectFormInput = ({
  classname,
  name,
  id,
  label,
  options,
  inputRef,
  userData,
  setUserData,
  inputError,
  errors,
  setErrors,
}) => {
  const [error, setError] = useState(inputError);
  
  const handleChange = (event) => {
    if (event.target.value === "seleccionar") {
      event.target.classList.remove("is-valid");
      setError(true)
    } else {
      event.target.classList.remove("is-invalid");
      setError(false)
      setUserData({
        ...userData,
        [event.target.name]: event.target.value,
      });
    }
  };

  // useEffect(() => {
  //   setErrors({
  //     ...errors,
  //     [inputRef.current.name]: error,
  //   });
  // }, [error]);

  return (
    <div className="form-floating">
      <select
        className="form-select"
        name={name}
        id={id}
        ref={inputRef}
        aria-label={label}
        onChange={handleChange}
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <label htmlFor={name}>{label}</label>
      {error && (
        <div className="invalid-feedback">{`Debes seleccionar tu ${label.toLowerCase()}.`}</div>
      )}
    </div>
  );
};

export default SelectFormInput;
