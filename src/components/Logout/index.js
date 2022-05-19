import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOutFromFbFetch } from "../../redux/logOutRedux/actions";
import "./index.css";
const LogOut = () => {
  const dispatch = useDispatch();
  const isUserLogued = useSelector((state) => state.loginReducer.isLoguedOut);
  const navigate = useNavigate();

  // isUserLogued === true ? navigate("/") : console.log("mmmm que ha pasao");
  console.log(isUserLogued);

  // useEffect(() => {
  //   navigate("/");
  // }, [isUserLogued]);
  const logOutHandler = () => {
    dispatch(logOutFromFbFetch());
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div>
      <button className="btn-log-out" onClick={logOutHandler}>
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
