import React from "react";

const ButtonRemove = ({
  deleteFunction,
  id,
  userIdLogued,
  showComponentDeleteOrCard,
}) => {
  const data = { id, userIdLogued };
  return (
    <button
      id={id}
      onClick={(e) => {
        console.log(e.target.value);
        deleteFunction(data);
        showComponentDeleteOrCard();
      }}
    >
      SI
    </button>
  );
};

export { ButtonRemove };
