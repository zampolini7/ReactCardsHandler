import React from "react";
import { ButtonRemove } from "../buttonRemove";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteCards, getCards } from "../../redux/cardsRedux/actions";

// import { CardContext } from "../../CardContext";
// import { useContext } from "react";

const DeleteCard = ({ showComponentDeleteOrCard, id }) => {
  // const { deleteFunction } = useContext(CardContext);
  const uIddLogued = useSelector((state) => state.loginReducer.user.uIddLogued);
  const objUser = {
    uIddLogued,
  };
  console.log(uIddLogued);
  //   console.log(result);
  const dispatch = useDispatch();
  const deleteFunc = (idOfCardToDelete) => {
    dispatch(deleteCards(idOfCardToDelete));
    dispatch(getCards(objUser));
  };
  return (
    <div className="container-card">
      <div className="div-logo-delete">
        <h2>¿Estás seguro que deseas eliminar esta tarjeta?</h2>
        <ButtonRemove
          id={id}
          deleteFunction={deleteFunc}
          userIdLogued={uIddLogued}
          showComponentDeleteOrCard={showComponentDeleteOrCard}
        />
        <button onClick={showComponentDeleteOrCard}> NO </button>
      </div>
    </div>
  );
};

export { DeleteCard };
