import React, { useState } from "react";
import "./index.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../firebase/firebase-config";
import { initializeApp } from "firebase/app";

const app = initializeApp(firebaseConfig);
const initialForm = [];
const auth = getAuth(app);

export const RegisterCard = () => {
  const [valueOfForm, setValueOfForm] = useState(initialForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = valueOfForm.user;
    const password = valueOfForm.password;

    console.log(user, password);
    const userRegister = await createUserWithEmailAndPassword(
      auth,
      user,
      password
    );
    console.log(userRegister);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValueOfForm({
      ...valueOfForm,
      [name]: value,
    });

    console.log(valueOfForm);
  };

  return (
    <div className="container-login">
      <h2>Bienvenido al Gestor de Tarjetas + picante del condado</h2>
      <form className="form-login" onSubmit={handleSubmit}>
        <label>Usuario</label>
        <input
          name="user"
          onChange={handleChange}
          //   onBlur={handleBlur}
          value={valueOfForm.user}
          type="text"
          placeholder="Usuario"
          // required
        />
        <label>Contraseña</label>
        <input
          name="password"
          onChange={handleChange}
          //   onBlur={handleBlur}
          value={valueOfForm.password}
          type="text"
          placeholder="contraseña"
          // required
        />
        <button> Register</button>
      </form>
    </div>
  );
};
