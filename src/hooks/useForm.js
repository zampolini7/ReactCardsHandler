import { useState } from "react";
import { useContext } from "react";
import { CardContext } from "../CardContext";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { saveCardsInFB } from "../firebase/saveCardsInFb";
import { useSelector } from "react-redux";

export const useForm = (initialForm, validationForms) => {
  const [valueOfForm, setValueOfForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  // const [loading, setLoading] = useState(false);
  // const [response, setResponse] = useState(null);
  // const [redirect, setRedirect] = useState(false);
  // const [incompletedForm, setIncompletedForm] = useState(false);

  const { addFunction } = useContext(CardContext);

  const userUid = useSelector((state) => state.loginReducer.user.uIddLogued);
  console.log(userUid);

  // const { creditCard, img, kindOfCreditCard, name, numberOfCreditCard, until } =
  //   valueOfForm;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValueOfForm({
      ...valueOfForm,
      [name]: value,
    });

    console.log(valueOfForm);
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validationForms(valueOfForm));
  };

  // let history = useHistory();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    let errorsLength = Object.keys(errors).length;
    console.log(errorsLength);

    // if (errors.valueOf.length === 0) {
    if (valueOfForm !== initialForm && errorsLength === 0) {
      e.preventDefault();
      console.log(errors.valueOf.length);
      console.log(valueOfForm);
      console.log("to el que lee");
      saveCardsInFB(
        userUid,
        // valueOfForm.creditCard,
        // valueOfForm.img,
        // valueOfForm.kindOfCreditCard,
        // valueOfForm.name,
        // valueOfForm.numberOfCreditCard,
        // valueOfForm.until
        valueOfForm
      );
      // addFunction(valueOfForm);
      navigate("/home/yourCards");
    } else {
      console.log("Completa el formulario correctamente.");
      e.preventDefault();
      console.log(valueOfForm);
    }
  };

  return {
    addFunction,
    valueOfForm,
    errors,
    // loading,
    // response,
    handleChange,
    setValueOfForm,
    handleBlur,
    handleSubmit,
    initialForm,
    // incompletedForm,
  };
};
