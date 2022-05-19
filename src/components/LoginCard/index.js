import React, { useState } from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { fecthUser, loguedUserLoading } from "../../redux/LoginRedux/actions";

const initialForm = [];

export const LoginCard = () => {
  const [valueOfForm, setValueOfForm] = useState(initialForm);

  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loginReducer.loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = valueOfForm.user;
    const password = valueOfForm.password;
    const userData = { user, password };
    console.log(user, password);

    dispatch(fecthUser(userData));
    dispatch(loguedUserLoading());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValueOfForm({
      ...valueOfForm,
      [name]: value,
    });
  };

  return loading === false ? (
    <div className="container-login">
      <div className="container-login-card">
        <h2 className="h2-login-card">
          Bienvenido al Gestor de Tarjetas + picante del condado
        </h2>
        <form className="form-login" onSubmit={handleSubmit}>
          <label className="label-card">Usuario</label>
          <input
            className="input-card"
            name="user"
            onChange={handleChange}
            //   onBlur={handleBlur}
            // value={valueOfForm.user}
            type="text"
            placeholder="Usuario"
            required
          />
          <label className="label-card">Contraseña</label>
          <input
            className="input-card"
            name="password"
            onChange={handleChange}
            // onBlur={handleBlur}
            // value={valueOfForm.password}
            type="text"
            placeholder="contraseña"
            required
          />
          <button className="button-card"> Log in</button>
        </form>
      </div>
    </div>
  ) : (
    <h2>Estamos cargando tu inicio </h2>
  );
};
