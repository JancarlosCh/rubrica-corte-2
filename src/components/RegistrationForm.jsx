/**
 Realizar Crud Básico(solo agregar y eliminar) en React, para un formulario de creación de usuarios (minimo 5 campos).
 Los usuarios creados deben ser renderizados en una lista la cual debe incluir el botón de eliminar para cada usuario.
 Todos los campos deben ser validados.
 */
import React, {
  createElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import FormInput from "./FormInput";
import SelectFormInput from "./SelectFormInput";

const initialState = {
  id: true,
  first_name: true,
  last_name: true,
  age: true,
  educational_level: true,
  email: true,
};

const RegistrationForm = ({
  users,
  setUsers,
  userData,
  setUserData,
  deleted,
}) => {
  //Opciones del input de tipo select
  const options = [
    "seleccionar",
    "bachiller",
    "técnico",
    "tecnólogo",
    "pregrado",
  ];

  //Estados usados para mostrar las alertas
  const [success, setSuccess] = useState(false);
  const [registered, setRegistered] = useState(false);
  const [errors, setErrors] = useState(initialState);

  //Referencias de los inputs
  const id = useRef("");
  const first_name = useRef("");
  const last_name = useRef("");
  const age = useRef("");
  const educational_level = useRef("");
  const email = useRef("");

  const formValidation = () => {
    if (errors.id) {
      id.current.classList.remove("is-valid");
      id.current.classList.add("is-invalid");
    }

    if (errors.first_name) {
      first_name.current.classList.remove("is-valid");
      first_name.current.classList.add("is-invalid");
    }

    if (errors.last_name) {
      last_name.current.classList.remove("is-valid");
      last_name.current.classList.add("is-invalid");
    }

    if (errors.age) {
      age.current.classList.remove("is-valid");
      age.current.classList.add("is-invalid");
    }

    if (errors.educational_level) {
      educational_level.current.classList.remove("is-valid");
      educational_level.current.classList.add("is-invalid");
    }

    if (errors.email) {
      email.current.classList.remove("is-valid");
      email.current.classList.add("is-invalid");
    }
  };

  /**
   * Permite buscar un usuario dentro de los registros del estado de usuarios
   * @param {*} id
   * @returns boolean
   */
  const userSearch = (id) => {
    return users.filter((user) => user.id == id).length > 0;
  };

  /**
   * Permite limpiar el texto de todos los inputs y restablece el estado de errores
   * al estado inicial
   */
  const resetData = () => {
    id.current.value = "";
    id.current.classList.remove("is-valid");

    first_name.current.value = "";
    first_name.current.classList.remove("is-valid");

    last_name.current.value = "";
    last_name.current.classList.remove("is-valid");

    age.current.value = "";
    age.current.classList.remove("is-valid");

    educational_level.current.value = "seleccionar";
    educational_level.current.classList.remove("is-valid");

    email.current.value = "";
    email.current.classList.remove("is-valid");

    setUserData(null);
    setErrors(initialState);
  };

  /**
   * Permite registrar los datos de un usuario si se cumplen algunas condiciones
   */
  const handleClick = () => {
    if (userData && Object.keys(userData).length === 6) {
      if (!userSearch(userData.id)) {
        //Añade un nuevo registro al estado de users
        setUsers([...users, userData]);

        //Permite mostrar una alerta una vez el registro se ha completado
        setSuccess(true);

        //Limpia  del estado userData los datos del usuario que se registró anteriormente
        resetData();

        //Permite borrar la alerta de success de la vista del usuario
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      } else {
        //Permite mostrar una alerta si un id ya se encuentra registrado
        setRegistered(true);

        //Se elimina la clase is-valid y se añade is-invalid al input del ID
        id.current.classList.remove("is-valid");
        id.current.classList.add("is-invalid");

        //Permite borrar la alerta registered de la vista del usuario
        setTimeout(() => {
          setRegistered(false);
        }, 3000);
      }
    } else {
      //Añade la clase is-invalid a todos los inputs del formulario si no se han ingresado datos
      formValidation();
    }
  };
console.log(errors.first_name);
  return (
    <div className="container" style={{ width: "455px" }}>
      {success && (
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          Registro agregado satisfactoriamente.
          <button
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="cerrar"
          ></button>
        </div>
      )}

      {deleted && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Registro eliminado satisfactoriamente.
          <button
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="cerrar"
          ></button>
        </div>
      )}
      {registered && (
        <div
          className="alert alert-danger alert-dismissible fade show"
          role="alert"
        >
          Ya existe un registro con este número de identificación.
          <button
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="cerrar"
          ></button>
        </div>
      )}
      <form
        className="needs-validation"
        noValidate
        onSubmit={(event) => event.preventDefault()}
      >
        <div className="row mb-3 g-2">
          <FormInput
            name="id"
            id="id"
            type="number"
            inputRef={id}
            label="Identificación"
            userData={userData}
            setUserData={setUserData}
            inputError={errors.id}
            errors={errors}
            setErrors={setErrors}
          />
        </div>

        <div className="row mb-3 g-2">
          <FormInput
            classname="col-md g-2"
            name="first_name"
            id="first_name"
            type="text"
            inputRef={first_name}
            label="Nombre"
            userData={userData}
            setUserData={setUserData}
            inputError={errors.first_name}
            errors={errors}
            setErrors={setErrors}
          />
          <FormInput
            classname="col-md g-2"
            name="last_name"
            id="last_name"
            type="text"
            inputRef={last_name}
            label="Apellido"
            userData={userData}
            setUserData={setUserData}
            inputError={errors.last_name}
            errors={errors}
            setErrors={setErrors}
          />
        </div>
        <div className="row mb-3 g-2">
          <FormInput
            classname=""
            name="age"
            id="age"
            type="number"
            inputRef={age}
            label="Edad"
            userData={userData}
            setUserData={setUserData}
            inputError={errors.age}
            errors={errors}
            setErrors={setErrors}
          />
        </div>
        <div className="row mb-3 g-2">
          <SelectFormInput
            classname=""
            name="educational_level"
            id="educational_level"
            label="Nivel de estudio"
            options={options}
            inputRef={educational_level}
            userData={userData}
            setUserData={setUserData}
            inputError={errors.educational_level}
            errors={errors}
            setErrors={setErrors}
          />
        </div>
        <div className="row mb-3 g-2">
          <FormInput
            classname="col-md g-2"
            name="email"
            id="email"
            type="email"
            inputRef={email}
            label="Correo"
            userData={userData}
            setUserData={setUserData}
            inputError={errors.email}
            errors={errors}
            setErrors={setErrors}
          />
        </div>
        <div className="row mb-3 g-0">
          <button onClick={handleClick} className="btn btn-primary">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
};

RegistrationForm.propTypes = {
  handleClick: PropTypes.func,
  handleChange: PropTypes.func,
};

export default RegistrationForm;
